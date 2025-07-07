import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { AssignClassDto } from './dto/assign-class.dto';

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  async create(createClassDto: CreateClassDto) {
    return this.prisma.class.create({
      data: createClassDto,
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.class.findMany({
      where: { tenantId },
      include: {
        teacher: true,
        classStudents: {
          include: {
            student: true,
          },
        },
      },
    });
  }

  async assignClass(assignClassDto: AssignClassDto) {
    return this.prisma.classStudent.create({
      data: {
        studentId: assignClassDto.studentId,
        classId: assignClassDto.classId,
        tenantId: assignClassDto.tenantId,
      },
    });
  }

  async findOne(id: string) {
    const classData = await this.prisma.class.findUnique({
      where: { id },
      include: {
        teacher: true,
        classStudents: {
          include: {
            student: true,
          },
        },
        attendances: true,
      },
    });

    if (!classData) {
      throw new NotFoundException(`Class with ID ${id} not found`);
    }

    return classData;
  }

  async update(id: string, updateClassDto: UpdateClassDto) {
    return this.prisma.class.update({
      where: { id },
      data: updateClassDto,
    });
  }

  async remove(id: string) {
    return this.prisma.class.delete({
      where: { id },
    });
  }
}
