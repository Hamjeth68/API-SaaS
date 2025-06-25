import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';
import { TenantResponseDto } from './dto/tenant-response-dto';

@ApiTags('Tenants')
// @ApiBearerAuth()
@Controller('tenants')
// @UseGuards(JwtAuthGuard)
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  @Roles(UserRole.SYS_ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new tenant' })
  @ApiBody({ type: CreateTenantDto })
  @ApiCreatedResponse({
    description: 'Tenant created successfully',
    type: TenantResponseDto,
  })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
  })
  async create(@Body() createTenantDto: CreateTenantDto) {
    return this.tenantService.create(createTenantDto);
  }

  @Get()
  @Roles(UserRole.SYS_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all tenants' })
  @ApiOkResponse({
    description: 'List of all tenants',
    type: [TenantResponseDto],
  })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  async findAll() {
    return this.tenantService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get tenant by ID' })
  @ApiParam({ name: 'id', description: 'Tenant ID', type: String })
  @ApiOkResponse({
    description: 'Tenant details',
    type: TenantResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Tenant not found' })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  async findOne(@Param('id') id: string) {
    return this.tenantService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYS_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update tenant' })
  @ApiParam({ name: 'id', description: 'Tenant ID', type: String })
  @ApiBody({ type: UpdateTenantDto })
  @ApiOkResponse({
    description: 'Tenant updated successfully',
    type: TenantResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Tenant not found' })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  async update(
    @Param('id') id: string,
    @Body() updateTenantDto: UpdateTenantDto,
  ) {
    return this.tenantService.update(id, updateTenantDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYS_ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete tenant' })
  @ApiParam({ name: 'id', description: 'Tenant ID', type: String })
  @ApiResponse({
    status: 204,
    description: 'Tenant deleted successfully',
  })
  @ApiNotFoundResponse({ description: 'Tenant not found' })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  async remove(@Param('id') id: string) {
    return this.tenantService.remove(id);
  }

  @Get('slug/:slug')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get tenant by slug' })
  @ApiParam({ name: 'slug', description: 'Tenant slug', type: String })
  @ApiOkResponse({
    description: 'Tenant details',
    type: TenantResponseDto,
  })
  @ApiNotFoundResponse({ description: 'Tenant not found' })
  @ApiForbiddenResponse({ description: 'Forbidden resource' })
  async getTenantBySlug(@Param('slug') slug: string) {
    return this.tenantService.getTenantBySlug(slug);
  }
}