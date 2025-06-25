import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Query,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UserRole } from 'generated/prisma';
import { CommunicationsService } from './communications.service';
import { CreateCommunicationDto } from './dto/create-communication.dto';
/**
 * TODO: Hamjeth - Fix the JWT token issue here
 * following all the JWT decorators and guards in every controller is commented out
 * because the JWT token is not being sent in the request headers.
 * This is likely due to the fact that the JWT token is not being sent in the request headers.
 * but we are trying it in swagger and still getting 401 Unauthorized
 */
@ApiTags('Communications')
// @ApiBearerAuth()
@Controller('communications')
// @UseGuards(JwtAuthGuard)
export class CommunicationsController {
  constructor(private readonly communicationsService: CommunicationsService) {}

  @Post()
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER)
  @ApiOperation({ summary: 'Create a communication' })
  create(@Body() createCommunicationDto: CreateCommunicationDto) {
    return this.communicationsService.create(createCommunicationDto);
  }

  @Get()
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER, UserRole.PARENT)
  @ApiOperation({ summary: 'Get communications for tenant' })
  findAll(@Query('tenantId') tenantId: string) {
    return this.communicationsService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(UserRole.SCHOOL_ADMIN, UserRole.TEACHER, UserRole.PARENT)
  @ApiOperation({ summary: 'Get communication by ID' })
  findOne(@Param('id') id: string) {
    return this.communicationsService.findOne(id);
  }
}
