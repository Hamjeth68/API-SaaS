import { Test, TestingModule } from '@nestjs/testing';
import { StaffService } from './staff.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

jest.mock('uuid');

const mockPrismaService = {
  staff: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('StaffService', () => {
  let service: StaffService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    (uuidv4 as jest.Mock).mockReturnValue(
      '12345678-1234-5678-1234-567812345678',
    );
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StaffService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<StaffService>(StaffService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a staff with generated staffId', async () => {
      const dto = { name: 'Staff 1', tenantId: 'tenant1' };
      const expectedStaffId = 'STAFF-1234567812345678';
      const expected = { ...dto, staffId: expectedStaffId };
      prisma.staff.create.mockResolvedValue(expected);
      await expect(service.create(dto as any)).resolves.toEqual(expected);
      expect(prisma.staff.create).toHaveBeenCalledWith({
        data: { ...dto, staffId: expectedStaffId },
      });
    });
  });

  describe('findAll', () => {
    it('should return all staff for a tenant', async () => {
      const result = [{ id: '1', tenantId: 'tenant1' }];
      prisma.staff.findMany.mockResolvedValue(result);
      await expect(service.findAll('tenant1')).resolves.toEqual(result);
      expect(prisma.staff.findMany).toHaveBeenCalledWith({
        where: { tenantId: 'tenant1' },
        include: { user: true, classes: true },
      });
    });
  });

  describe('findOne', () => {
    it('should return a staff by id', async () => {
      const staff = { id: '1', tenantId: 'tenant1' };
      prisma.staff.findUnique.mockResolvedValue(staff);
      await expect(service.findOne('1')).resolves.toEqual(staff);
      expect(prisma.staff.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { user: true, classes: true },
      });
    });

    it('should throw NotFoundException if staff not found', async () => {
      prisma.staff.findUnique.mockResolvedValue(null);
      await expect(service.findOne('2')).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a staff', async () => {
      const dto = { name: 'Updated' };
      const updated = { id: '1', ...dto };
      prisma.staff.update.mockResolvedValue(updated);
      await expect(service.update('1', dto as any)).resolves.toEqual(updated);
      expect(prisma.staff.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: dto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a staff', async () => {
      const deleted = { id: '1' };
      prisma.staff.delete.mockResolvedValue(deleted);
      await expect(service.remove('1')).resolves.toEqual(deleted);
      expect(prisma.staff.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });
});
