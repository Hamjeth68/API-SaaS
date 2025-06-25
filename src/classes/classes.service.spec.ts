import { Test, TestingModule } from '@nestjs/testing';
import { ClassesService } from './classes.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  class: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('ClassesService', () => {
  let service: ClassesService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassesService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ClassesService>(ClassesService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a class', async () => {
      const dto = { name: 'Class 1', tenantId: 'tenant1' };
      prisma.class.create.mockResolvedValue(dto);
      await expect(service.create(dto as any)).resolves.toEqual(dto);
      expect(prisma.class.create).toHaveBeenCalledWith({ data: dto });
    });
  });

  describe('findAll', () => {
    it('should return all classes for a tenant', async () => {
      const result = [{ id: '1', tenantId: 'tenant1' }];
      prisma.class.findMany.mockResolvedValue(result);
      await expect(service.findAll('tenant1')).resolves.toEqual(result);
      expect(prisma.class.findMany).toHaveBeenCalledWith({
        where: { tenantId: 'tenant1' },
        include: {
          teacher: true,
          classStudents: { include: { student: true } },
        },
      });
    });
  });

  describe('findOne', () => {
    it('should return a class by id', async () => {
      const classData = { id: '1', tenantId: 'tenant1' };
      prisma.class.findUnique.mockResolvedValue(classData);
      await expect(service.findOne('1')).resolves.toEqual(classData);
      expect(prisma.class.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: {
          teacher: true,
          classStudents: { include: { student: true } },
          attendances: true,
        },
      });
    });

    it('should throw NotFoundException if class not found', async () => {
      prisma.class.findUnique.mockResolvedValue(null);
      await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a class', async () => {
      const dto = { name: 'Updated' };
      const updated = { id: '1', ...dto };
      prisma.class.update.mockResolvedValue(updated);
      await expect(service.update('1', dto as any)).resolves.toEqual(updated);
      expect(prisma.class.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: dto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a class', async () => {
      const deleted = { id: '1' };
      prisma.class.delete.mockResolvedValue(deleted);
      await expect(service.remove('1')).resolves.toEqual(deleted);
      expect(prisma.class.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });
});
