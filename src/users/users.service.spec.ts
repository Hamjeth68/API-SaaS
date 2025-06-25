import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

const mockPrismaService = {
  tenant: {
    findUnique: jest.fn(),
  },
  user: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('UsersService', () => {
  let service: UsersService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should throw if tenant does not exist', async () => {
      prisma.tenant.findUnique.mockResolvedValue(null);
      await expect(
        service.create({ tenantId: '1', password: 'pass' } as any)
      ).rejects.toThrow(NotFoundException);
    });
    it('should create a user and return UserResponseDto', async () => {
      prisma.tenant.findUnique.mockResolvedValue({ id: '1' });
      const user = { id: '1', password: 'hashedPassword', isActive: true };
      prisma.user.create.mockResolvedValue(user);
      const dto = { tenantId: '1', password: 'pass' };
      const result = await service.create(dto as any);
      expect(result).toEqual({ id: '1', isActive: true });
      expect(prisma.user.create).toHaveBeenCalledWith({
        data: { ...dto, password: 'hashedPassword', isActive: true },
      });
    });
  });

  describe('findAll', () => {
    it('should return all users for a tenant', async () => {
      const users = [
        { id: '1', password: 'pass', tenantId: '1' },
        { id: '2', password: 'pass', tenantId: '1' },
      ];
      prisma.user.findMany.mockResolvedValue(users);
      const result = await service.findAll('1');
      expect(result).toEqual([
        { id: '1', tenantId: '1' },
        { id: '2', tenantId: '1' },
      ]);
      expect(prisma.user.findMany).toHaveBeenCalledWith({ where: { tenantId: '1' } });
    });
  });

  describe('findOne', () => {
    it('should return a user by id', async () => {
      const user = { id: '1', password: 'pass' };
      prisma.user.findUnique.mockResolvedValue(user);
      const result = await service.findOne('1');
      expect(result).toEqual({ id: '1' });
      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: '1' } });
    });
    it('should throw NotFoundException if user not found', async () => {
      prisma.user.findUnique.mockResolvedValue(null);
      await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      const user = { id: '1', email: 'test@test.com' };
      prisma.user.findUnique.mockResolvedValue(user);
      const result = await service.findByEmail('test@test.com');
      expect(result).toEqual(user);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { email: 'test@test.com' } });
    });
  });

  describe('update', () => {
    it('should update a user and hash password if provided', async () => {
      const user = { id: '1', password: 'hashedPassword' };
      prisma.user.update.mockResolvedValue(user);
      const dto = { password: 'newpass' };
      const result = await service.update('1', dto as any);
      expect(result).toEqual({ id: '1' });
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: { password: 'hashedPassword' },
      });
    });
    it('should update a user without password if not provided', async () => {
      const user = { id: '1', name: 'Test' };
      prisma.user.update.mockResolvedValue(user);
      const dto = { name: 'Test' };
      const result = await service.update('1', dto as any);
      expect(result).toEqual({ id: '1', name: 'Test' });
      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: { name: 'Test' },
      });
    });
  });

  describe('remove', () => {
    it('should delete a user', async () => {
      prisma.user.delete.mockResolvedValue(undefined);
      await expect(service.remove('1')).resolves.toBeUndefined();
      expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });

  describe('activateUser', () => {
    it('should activate a user', async () => {
      const user = { id: '1', isActive: true };
      prisma.user.update.mockResolvedValue(user);
      const result = await service.activateUser('1');
      expect(result).toEqual({ id: '1', isActive: true });
      expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: '1' }, data: { isActive: true } });
    });
  });

  describe('deactivateUser', () => {
    it('should deactivate a user', async () => {
      const user = { id: '1', isActive: false };
      prisma.user.update.mockResolvedValue(user);
      const result = await service.deactivateUser('1');
      expect(result).toEqual({ id: '1', isActive: false });
      expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: '1' }, data: { isActive: false } });
    });
  });
});
