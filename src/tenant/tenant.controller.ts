import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma';

@Controller('tenants')
@UseGuards(JwtAuthGuard)
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @Roles(UserRole.SYS_ADMIN)
  create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantService.create(createTenantDto);
  }

  @Get()
  @Roles(UserRole.SYS_ADMIN)
  findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  findOne(@Param('id') id: string) {
    return this.tenantService.findOne(id);
  }
}