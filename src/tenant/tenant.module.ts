import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantMiddleware } from './tenant.middleware';
import { PrismaService } from 'src/prisma/prisma.service';
import { TenantController } from './tenant.controller';

@Module({
  providers: [TenantService, PrismaService, TenantMiddleware],
  controllers: [TenantController],
  exports: [TenantMiddleware, TenantService],
})
export class TenantModule {}
