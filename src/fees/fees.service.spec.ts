import { Test, TestingModule } from '@nestjs/testing';
import { FeesService } from './fees.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  fee: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('FeesService', () => {
  let service: FeesService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FeesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<FeesService>(FeesService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a fee', async () => {
      const dto = { amount: 100, tenantId: 'tenant1' };
      prisma.fee.create.mockResolvedValue(dto);
      await expect(service.create(dto as any)).resolves.toEqual(dto);
      expect(prisma.fee.create).toHaveBeenCalledWith({ data: dto });
    });
  });

  describe('findAll', () => {
    it('should return all fees for a tenant', async () => {
      const result = [{ id: '1', tenantId: 'tenant1' }];
      prisma.fee.findMany.mockResolvedValue(result);
      await expect(service.findAll('tenant1')).resolves.toEqual(result);
      expect(prisma.fee.findMany).toHaveBeenCalledWith({
        where: { tenantId: 'tenant1' },
        include: { student: true },
      });
    });
  });

  describe('findByStudent', () => {
    it('should return all fees for a student', async () => {
      const result = [{ id: '1', studentId: 'student1' }];
      prisma.fee.findMany.mockResolvedValue(result);
      await expect(service.findByStudent('student1')).resolves.toEqual(result);
      expect(prisma.fee.findMany).toHaveBeenCalledWith({
        where: { studentId: 'student1' },
        orderBy: { dueDate: 'asc' },
      });
    });
  });

  describe('findOne', () => {
    it('should return a fee by id', async () => {
      const fee = { id: '1', tenantId: 'tenant1' };
      prisma.fee.findUnique.mockResolvedValue(fee);
      await expect(service.findOne('1')).resolves.toEqual(fee);
      expect(prisma.fee.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
    it('should throw NotFoundException if fee not found', async () => {
      prisma.fee.findUnique.mockResolvedValue(null);
      await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a fee', async () => {
      const dto = { amount: 200 };
      const updated = { id: '1', ...dto };
      prisma.fee.update.mockResolvedValue(updated);
      await expect(service.update('1', dto as any)).resolves.toEqual(updated);
      expect(prisma.fee.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: dto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a fee', async () => {
      const deleted = { id: '1' };
      prisma.fee.delete.mockResolvedValue(deleted);
      await expect(service.remove('1')).resolves.toEqual(deleted);
      expect(prisma.fee.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });
});
