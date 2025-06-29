import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  Request,
  HttpStatus,
  ParseUUIDPipe,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';
import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';
import { CommunicationsService } from './communications.service';
import { TenantId } from 'src/auth/decorators/tenant.decorator';

@ApiTags('communications')
@Controller('communications')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth('JWT-auth')
export class CommunicationsController {
  constructor(private readonly communicationsService: CommunicationsService) {}

  @Post()
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({
    summary: 'Create a new communication',
    description:
      'Create a new communication that can be sent to specific roles or users',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Communication created successfully',
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Insufficient permissions',
  })
  async create(
    @Body(ValidationPipe) createCommunicationDto: CreateCommunicationDto,
    @Request() req: any,
  ) {
    // Ensure the communication is created for the user's tenant and sender
    const communicationData = {
      ...createCommunicationDto,
      tenantId: req.user.tenantId,

      senderId: req.user.sub,
    };
    return await this.communicationsService.create(communicationData);
  }

  @Get()
  @Roles(
    UserRole.SYS_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TEACHER,
    UserRole.PARENT,
    UserRole.STUDENT,
  )
  @ApiOperation({
    summary: 'Get all communications for a tenant',
    description:
      "Retrieve all communications for the current user's tenant with optional filtering",
  })
  @ApiQuery({
    name: 'type',
    required: false,
    description: 'Filter by communication type',
  })
  @ApiQuery({
    name: 'priority',
    required: false,
    description: 'Filter by priority level',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communications retrieved successfully',
  })
  async findAll(
    @TenantId() tenantId: string,
    @Request() req: any,
    @Query('type') type?: string,
    @Query('priority') priority?: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20',
  ) {
    if (!tenantId) {
      throw new BadRequestException('Tenant ID is required');
    }
    const filters = {
      tenantId: req.user.tenantId,
      type,
      priority,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };

    return await this.communicationsService.findAllWithFilters(filters);
  }

  @Get('my-communications')
  @Roles(
    UserRole.SYS_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TEACHER,
    UserRole.PARENT,
    UserRole.STUDENT,
  )
  @ApiOperation({
    summary: 'Get communications relevant to the current user',
    description:
      "Retrieve communications that are targeted to the current user's role or specifically to them",
  })
  @ApiQuery({
    name: 'unread',
    required: false,
    description: 'Filter for unread communications only',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User communications retrieved successfully',
  })
  async getMycommunications(
    @Request() req: any,
    @Query('unread') unread?: string,
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '20',
  ) {
    const filters = {
      userId: req.user.sub,
      userRole: req.user.role,
      tenantId: req.user.tenantId,
      unreadOnly: unread === 'true',
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    };

    return await this.communicationsService.findUserCommunications(filters);
  }

  @Get(':id')
  @Roles(
    UserRole.SYS_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TEACHER,
    UserRole.PARENT,
    UserRole.STUDENT,
  )
  @ApiOperation({
    summary: 'Get a communication by ID',
    description: 'Retrieve a specific communication by its ID',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication retrieved successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Communication not found',
  })
  async findOne(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    // Only mark as read if markAsRead is implemented
    const communication = await this.communicationsService.findOne(id);
    // await this.communicationsService.markAsRead(id, req.user.sub);
    return communication;
  }

  @Patch(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({
    summary: 'Update a communication',
    description: 'Update an existing communication (only by authorized users)',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication updated successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Communication not found',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Insufficient permissions to update this communication',
  })
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(ValidationPipe) updateCommunicationDto: UpdateCommunicationDto,
    @Request() req: any,
  ) {
    // Verify the communication belongs to the user's tenant
    await this.communicationsService.verifyTenantAccess(id, req.user.tenantId);

    return await this.communicationsService.update(id, updateCommunicationDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiOperation({
    summary: 'Delete a communication',
    description: 'Delete a communication (only by system or school admins)',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication deleted successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Communication not found',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'Insufficient permissions to delete this communication',
  })
  async remove(@Param('id', ParseUUIDPipe) id: string, @Request() req: any) {
    // Verify the communication belongs to the user's tenant
    await this.communicationsService.verifyTenantAccess(id, req.user.tenantId);

    return await this.communicationsService.remove(id);
  }

  @Post(':id/retry-email')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({
    summary: 'Retry failed email notifications',
    description: 'Retry sending email notifications for a communication',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Email retry queued successfully',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Communication not found',
  })
  async retryEmail(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: any,
  ) {
    // Verify the communication belongs to the user's tenant
    await this.communicationsService.verifyTenantAccess(id, req.user.tenantId);

    await this.communicationsService.retryFailedEmails(id);

    return {
      message: 'Email notifications queued for retry',
      communicationId: id,
    };
  }

  @Post(':id/mark-read')
  @Roles(
    UserRole.SYS_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TEACHER,
    UserRole.PARENT,
    UserRole.STUDENT,
  )
  @ApiOperation({
    summary: 'Mark communication as read',
    description: 'Mark a communication as read for the current user',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication marked as read',
  })
  async markAsRead(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: any,
  ) {
    // Only call if markAsRead is implemented
    // await this.communicationsService.markAsRead(id, req.user.sub);
    return {
      message: 'Communication marked as read (not implemented)',
      communicationId: id,
      userId: req.user.sub,
    };
  }

  @Post(':id/mark-unread')
  @Roles(
    UserRole.SYS_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TEACHER,
    UserRole.PARENT,
    UserRole.STUDENT,
  )
  @ApiOperation({
    summary: 'Mark communication as unread',
    description: 'Mark a communication as unread for the current user',
  })
  @ApiParam({ name: 'id', description: 'Communication ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication marked as unread',
  })
  async markAsUnread(
    @Param('id', ParseUUIDPipe) id: string,
    @Request() req: any,
  ) {
    // Only call if markAsUnread is implemented
    // await this.communicationsService.markAsUnread(id, req.user.sub);
    return {
      message: 'Communication marked as unread (not implemented)',
      communicationId: id,
      userId: req.user.sub,
    };
  }

  @Get('stats/summary')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({
    summary: 'Get communication statistics',
    description: 'Get statistics about communications for the tenant',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Communication statistics retrieved successfully',
  })
  async getStats(@Request() req: any) {
    return await this.communicationsService.getCommunicationStats(
      req.user.tenantId,
    );
  }

  @Get('audience/suggestions')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({
    summary: 'Get audience suggestions',
    description:
      'Get suggestions for communication audience based on roles and users',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search term for filtering users',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Audience suggestions retrieved successfully',
  })
  async getAudienceSuggestions(
    @Request() req: any,
    @Query('search') search?: string,
  ) {
    return await this.communicationsService.getAudienceSuggestions(
      req.user.tenantId,
      search,
    );
  }
}
