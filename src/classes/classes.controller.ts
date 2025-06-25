import { Controller, Get, Post, Body, Param, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody } from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';
import { UpdateClassDto } from './dto/update-class.dto';

@ApiTags('Classes')
// @ApiBearerAuth()
@Controller('classes')
// @UseGuards(JwtAuthGuard)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Create a new class' })
  @ApiBody({ type: CreateClassDto, description: 'Class creation payload' })
  @ApiResponse({ status: 201, description: 'Class created successfully.', schema: { $ref: '#/components/schemas/CreateClassDto' } })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @Get()
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Get all classes for tenant' })
  @ApiQuery({ name: 'tenantId', required: true, type: String, description: 'Tenant ID' })
  @ApiResponse({ status: 200, description: 'List of classes.', schema: { type: 'array', items: { $ref: '#/components/schemas/CreateClassDto' } } })
  findAll(@Query('tenantId') tenantId: string) {
    return this.classesService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Get class by ID' })
  @ApiParam({ name: 'id', required: true, type: String, description: 'Class ID' })
  @ApiResponse({ status: 200, description: 'Class found.', schema: { $ref: '#/components/schemas/CreateClassDto' } })
  @ApiResponse({ status: 404, description: 'Class not found.' })
  findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Update class' })
  @ApiParam({ name: 'id', required: true, type: String, description: 'Class ID' })
  @ApiBody({ type: UpdateClassDto, description: 'Class update payload' })
  @ApiResponse({ status: 200, description: 'Class updated successfully.', schema: { $ref: '#/components/schemas/UpdateClassDto' } })
  @ApiResponse({ status: 404, description: 'Class not found.' })
  update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(id, updateClassDto);
  }

  @Delete(':id')
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Delete class' })
  @ApiParam({ name: 'id', required: true, type: String, description: 'Class ID' })
  @ApiResponse({ status: 200, description: 'Class deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Class not found.' })
  remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}