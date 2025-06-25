import { Test, TestingModule } from '@nestjs/testing';
import { StudentsService } from './students.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';

const mockPrismaService = {
  student: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('StudentsService', () => {
  let service: StudentsService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<StudentsService>(StudentsService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a student', async () => {
      const dto = { name: 'Student 1', tenantId: 'tenant1' };
      prisma.student.create.mockResolvedValue(dto);
      await expect(service.create(dto as any)).resolves.toEqual(dto);
      expect(prisma.student.create).toHaveBeenCalledWith({ data: dto });
    });
  });

  describe('findAll', () => {
    it('should return all students for a tenant', async () => {
      const result = [{ id: '1', tenantId: 'tenant1' }];
      prisma.student.findMany.mockResolvedValue(result);
      await expect(service.findAll('tenant1')).resolves.toEqual(result);
      expect(prisma.student.findMany).toHaveBeenCalledWith({
        where: { tenantId: 'tenant1' },
      });
    });
  });

  describe('findOne', () => {
    it('should return a student by id', async () => {
      const student = { id: '1', tenantId: 'tenant1' };
      prisma.student.findUnique.mockResolvedValue(student);
      await expect(service.findOne('1')).resolves.toEqual(student);
      expect(prisma.student.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: {
          attendances: true,
          classStudents: { include: { class: true } },
        },
      });
    });

    it('should throw NotFoundException if student not found', async () => {
      prisma.student.findUnique.mockResolvedValue(null);
      await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a student', async () => {
      const dto = { name: 'Updated' };
      const updated = { id: '1', ...dto };
      prisma.student.update.mockResolvedValue(updated);
      await expect(service.update('1', dto as any)).resolves.toEqual(updated);
      expect(prisma.student.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: dto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a student', async () => {
      const deleted = { id: '1' };
      prisma.student.delete.mockResolvedValue(deleted);
      await expect(service.remove('1')).resolves.toEqual(deleted);
      expect(prisma.student.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
});
