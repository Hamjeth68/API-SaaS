import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { StaffService } from './staff.service';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';
import { CreateStaffDto } from './dto/create-staff.dto';
/**
 * TODO: Hamjeth - Fix the JWT token issue here
 * following all the JWT decorators and guards in every controller is commented out
 * because the JWT token is not being sent in the request headers.
 * This is likely due to the fact that the JWT token is not being sent in the request headers.
 * but we are trying it in swagger and still getting 401 Unauthorized
 */
@ApiTags('Staff')
@ApiBearerAuth()
@Controller('staff')
@UseGuards(JwtAuthGuard)
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Create staff member' })
  @ApiBody({ type: CreateStaffDto })
  @ApiResponse({
    status: 201,
    description: 'Staff member created successfully.',
  })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  create(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.create(createStaffDto);
  }

  @Get()
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Get all staff for tenant' })
  @ApiQuery({
    name: 'tenantId',
    required: true,
    type: String,
    description: 'Tenant ID',
  })
  @ApiResponse({ status: 200, description: 'List of staff.' })
  findAll(@Query('tenantId') tenantId: string) {
    return this.staffService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Get staff by ID' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Staff ID',
  })
  @ApiResponse({ status: 200, description: 'Staff found.' })
  @ApiResponse({ status: 404, description: 'Staff not found.' })
  findOne(@Param('id') id: string) {
    return this.staffService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Update staff member' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Staff ID',
  })
  @ApiBody({ type: UpdateStaffDto })
  @ApiResponse({ status: 200, description: 'Staff updated successfully.' })
  @ApiResponse({ status: 404, description: 'Staff not found.' })
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto) {
    return this.staffService.update(id, updateStaffDto);
  }

  @Delete(':id')
  @Roles(UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Delete staff member' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Staff ID',
  })
  @ApiResponse({ status: 200, description: 'Staff deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Staff not found.' })
  remove(@Param('id') id: string) {
    return this.staffService.remove(id);
  }
}
