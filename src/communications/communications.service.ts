import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommunicationDto } from './dto/create-communication.dto';

@Injectable()
export class CommunicationsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommunicationDto: CreateCommunicationDto) {
    return this.prisma.communication.create({
      data: createCommunicationDto,
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.communication.findMany({
      where: { tenantId },
      include: {
        sender: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const communication = await this.prisma.communication.findUnique({
      where: { id },
      include: {
        sender: true,
      },
    });

    if (!communication) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }

    return communication;
  }
}