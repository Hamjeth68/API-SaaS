import { Test, TestingModule } from '@nestjs/testing';
import { TenantService } from './tenant.service';
import { PrismaService } from 'src/prisma/prisma.service';

const mockPrismaService = {
  tenant: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('TenantService', () => {
  let service: TenantService;
  let prisma: typeof mockPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<TenantService>(TenantService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should create a tenant with isActive true', async () => {
      const dto = { name: 'Tenant 1', slug: 'tenant-1' };
      const expected = { ...dto, isActive: true };
      prisma.tenant.create.mockResolvedValue(expected);
      await expect(service.create(dto as any)).resolves.toEqual(expected);
      expect(prisma.tenant.create).toHaveBeenCalledWith({
        data: { ...dto, isActive: true },
      });
    });
  });

  describe('findAll', () => {
    it('should return all tenants', async () => {
      const result = [{ id: '1', name: 'Tenant 1' }];
      prisma.tenant.findMany.mockResolvedValue(result);
      await expect(service.findAll()).resolves.toEqual(result);
      expect(prisma.tenant.findMany).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a tenant by id', async () => {
      const tenant = { id: '1', name: 'Tenant 1' };
      prisma.tenant.findUnique.mockResolvedValue(tenant);
      await expect(service.findOne('1')).resolves.toEqual(tenant);
      expect(prisma.tenant.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        include: { users: true, students: true, staff: true },
      });
    });
  });

  describe('update', () => {
    it('should update a tenant', async () => {
      const dto = { name: 'Updated' };
      const updated = { id: '1', ...dto };
      prisma.tenant.update.mockResolvedValue(updated);
      await expect(service.update('1', dto as any)).resolves.toEqual(updated);
      expect(prisma.tenant.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: dto,
      });
    });
  });

  describe('remove', () => {
    it('should delete a tenant', async () => {
      const deleted = { id: '1' };
      prisma.tenant.delete.mockResolvedValue(deleted);
      await expect(service.remove('1')).resolves.toEqual(deleted);
      expect(prisma.tenant.delete).toHaveBeenCalledWith({ where: { id: '1' } });
    });
  });

  describe('getTenantBySlug', () => {
    it('should return a tenant by slug', async () => {
      const tenant = { id: '1', slug: 'tenant-1' };
      prisma.tenant.findUnique.mockResolvedValue(tenant);
      await expect(service.getTenantBySlug('tenant-1')).resolves.toEqual(
        tenant,
      );
      expect(prisma.tenant.findUnique).toHaveBeenCalledWith({
        where: { slug: 'tenant-1' },
      });
    });
  });
});
