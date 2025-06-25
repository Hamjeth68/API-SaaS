import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

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