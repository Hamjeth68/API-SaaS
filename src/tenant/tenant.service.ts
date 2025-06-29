import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  async create(createTenantDto: CreateTenantDto) {
    return this.prisma.tenant.create({
      data: {
        ...createTenantDto,
        isActive: true,
      },
    });
  }

  async findAll() {
    return this.prisma.tenant.findMany();
  }

  async findOne(id: string) {
    return this.prisma.tenant.findUnique({
      where: { id },
      include: {
        users: true,
        students: true,
        staff: true,
      },
    });
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    return this.prisma.tenant.update({
      where: { id },
      data: updateTenantDto,
    });
  }

  async remove(id: string) {
    return this.prisma.tenant.delete({
      where: { id },
    });
  }

  async getTenantBySlug(slug: string) {
    return this.prisma.tenant.findUnique({
      where: { slug },
    });
  }
}
