import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BulkAttendanceDto } from './dto/bulk-attendance.dto';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    return this.prisma.attendance.create({
      data: createAttendanceDto,
    });
  }

  async createBulk(bulkAttendanceDto: BulkAttendanceDto) {
    const { date, tenantId, classId, attendances } = bulkAttendanceDto;

    return this.prisma.$transaction(
      attendances.map((attendance) =>
        this.prisma.attendance.upsert({
          where: {
            studentId_date: {
              studentId: attendance.studentId,
              date,
            },
          },
          update: {
            status: attendance.status,
            classId,
          },
          create: {
            date,
            status: attendance.status,
            studentId: attendance.studentId,
            classId,
            tenantId,
          },
        }),
      ),
    );
  }

  async findAll(tenantId: string) {
    return this.prisma.attendance.findMany({
      where: { tenantId },
      include: {
        student: true,
        class: true,
      },
    });
  }

  async findByClass(classId: string) {
    return this.prisma.attendance.findMany({
      where: { classId },
      include: {
        student: true,
      },
    });
  }

  async findByStudent(studentId: string) {
    return this.prisma.attendance.findMany({
      where: { studentId },
      orderBy: { date: 'desc' },
    });
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return this.prisma.attendance.update({
      where: { id },
      data: updateAttendanceDto,
    });
  }

  async remove(id: string) {
    return this.prisma.attendance.delete({
      where: { id },
    });
  }
}
