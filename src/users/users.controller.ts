import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma';
import { ApiTags, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';


@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 201, description: 'User created', type: UserResponseDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 200, description: 'List of users', type: [UserResponseDto] })
  async findAll(@Query('tenantId') tenantId: string): Promise<UserResponseDto[]> {
    return this.usersService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 200, description: 'User details', type: UserResponseDto })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 200, description: 'User updated', type: UserResponseDto })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 204, description: 'User deleted' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Patch(':id/activate')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 200, description: 'User activated', type: UserResponseDto })
  async activateUser(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.activateUser(id);
  }

  @Patch(':id/deactivate')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @ApiResponse({ status: 200, description: 'User deactivated', type: UserResponseDto })
  async deactivateUser(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.deactivateUser(id);
  }
}