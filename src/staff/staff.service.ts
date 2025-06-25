import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { CreateStaffDto } from './dto/create-staff.dto';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    return this.prisma.staff.create({
      data: {
        ...createStaffDto,
        staffId: `STAFF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
      },
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.staff.findMany({
      where: { tenantId },
      include: {
        user: true,
        classes: true,
      },
    });
  }

  async findOne(id: string) {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
      include: {
        user: true,
        classes: true,
      },
    });

    if (!staff) {
      throw new NotFoundException(`Staff with ID ${id} not found`);
    }

    return staff;
  }

  async update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.prisma.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  async remove(id: string) {
    return this.prisma.staff.delete({
      where: { id },
    });
  }
}