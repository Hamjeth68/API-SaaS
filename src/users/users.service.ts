import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserResponseDto } from './dto/user-response.dto';
import { createUserWithHashedPassword } from 'src/shared/user-creation.helper';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  private mapToDto(user: any): UserResponseDto {
    const { password, ...result } = user;
    return result;
  }

  // users.service.ts
  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: createUserDto.tenantId },
    });

    if (!tenant) {
      throw new NotFoundException(
        `Tenant with ID ${createUserDto.tenantId} not found`,
      );
    }

    const user = await createUserWithHashedPassword(this.prisma, createUserDto);
    return this.mapToDto(user);
  }

  async findAll(tenantId: string): Promise<UserResponseDto[]> {
    const users = await this.prisma.user.findMany({
      where: { tenantId },
    });
    return users.map((user: any) => this.mapToDto(user));
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.mapToDto(user);
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const data: any = { ...updateUserDto };

    if (updateUserDto.password) {
      data.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const user = await this.prisma.user.update({
      where: { id },
      data,
    });

    return this.mapToDto(user);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async activateUser(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { isActive: true },
    });
    return this.mapToDto(user);
  }

  async deactivateUser(id: string): Promise<UserResponseDto> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
    return this.mapToDto(user);
  }
}
