import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';

@Injectable()
export class FeesService {
  constructor(private prisma: PrismaService) {}

  async create(createFeeDto: CreateFeeDto) {
    // Optionally validate tenant or student existence here
    return this.prisma.fee.create({
      data: createFeeDto,
    });
  }

  async findAll(tenantId: string) {
    // Optionally validate tenant existence here
    return this.prisma.fee.findMany({
      where: { tenantId },
      include: {
        student: true,
      },
    });
  }

  async findByStudent(studentId: string) {
    // Optionally validate student existence here
    return this.prisma.fee.findMany({
      where: { studentId },
      orderBy: { dueDate: 'asc' },
    });
  }

  async findOne(id: string) {
    const fee = await this.prisma.fee.findUnique({
      where: { id },
    });
    if (!fee) {
      throw new NotFoundException(`Fee with ID ${id} not found`);
    }
    return fee;
  }

  async update(id: string, updateFeeDto: UpdateFeeDto) {
    // Optionally validate fee existence here
    return this.prisma.fee.update({
      where: { id },
      data: updateFeeDto,
    });
  }

  async remove(id: string) {
    // Optionally validate fee existence here
    return this.prisma.fee.delete({
      where: { id },
    });
  }
}
