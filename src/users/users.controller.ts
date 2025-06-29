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
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiQuery,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
/**
 * TODO: Hamjeth - Fix the JWT token issue here
 * following all the JWT decorators and guards in every controller is commented out
 * because the JWT token is not being sent in the request headers.
 * This is likely due to the fact that the JWT token is not being sent in the request headers.
 * but we are trying it in swagger and still getting 401 Unauthorized
 */
@ApiTags('Users')
@ApiBearerAuth('JWT-auth')
@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Create a new user',
    description: 'Creates a new user account. Requires admin privileges.',
  })
  @ApiBody({
    type: CreateUserDto,
    description: 'User creation data',
    examples: {
      admin: {
        summary: 'Admin user creation',
        value: {
          email: 'admin@example.com',
          password: 'password123',
          firstName: 'Admin',
          lastName: 'User',
          role: 'ADMIN',
          tenantId: 'cmcafv63i0000x9oo3eb3omvq',
        },
      },
      teacher: {
        summary: 'Teacher user creation',
        value: {
          email: 'teacher@example.com',
          password: 'password123',
          firstName: 'Teacher',
          lastName: 'User',
          role: 'TEACHER',
          tenantId: 'cmcafv63i0000x9oo3eb3omvq',
        },
      },
    },
  })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: UserResponseDto,
  })
  @ApiBadRequestResponse({
    description: 'Validation error',
    content: {
      'application/json': {
        examples: {
          email: {
            value: {
              statusCode: 400,
              message: ['email must be an email'],
              error: 'Bad Request',
            },
          },
          password: {
            value: {
              statusCode: 400,
              message: ['password must be at least 6 characters'],
              error: 'Bad Request',
            },
          },
          role: {
            value: {
              statusCode: 400,
              message: ['role must be a valid enum value'],
              error: 'Bad Request',
            },
          },
        },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiConflictResponse({
    description: 'Email already exists',
    content: {
      'application/json': {
        example: {
          statusCode: 409,
          message: 'Email already exists',
          error: 'Conflict',
        },
      },
    },
  })
  @ApiNotFoundResponse({
    description: 'Tenant not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message:
            'Tenant with ID 123e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found',
        },
      },
    },
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get all users',
    description: 'Retrieves a list of all users. Requires admin privileges.',
  })
  @ApiQuery({
    name: 'tenantId',
    required: false,
    description: 'Filter users by tenant ID',
    example: 'cmcafv63i0000x9oo3eb3omvq',
  })
  @ApiOkResponse({
    description: 'List of users retrieved successfully',
    type: [UserResponseDto],
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  async findAll(
    @Query('tenantId') tenantId: string,
  ): Promise<UserResponseDto[]> {
    return this.usersService.findAll(tenantId);
  }

  @Get(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get user by ID',
    description:
      'Retrieves a single user by their ID. Requires admin privileges.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    example: 'clnjakbv20000x9oo3eb3omvq',
  })
  @ApiOkResponse({
    description: 'User details retrieved successfully',
    type: UserResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message: 'User with ID clnjakbv20000x9oo3eb3omvq not found',
          error: 'Not Found',
        },
      },
    },
  })
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Update user',
    description: 'Updates an existing user. Requires admin privileges.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    example: 'clnjakbv20000x9oo3eb3omvq',
  })
  @ApiBody({
    type: UpdateUserDto,
    description: 'User update data',
    examples: {
      basic: {
        summary: 'Basic update',
        value: {
          firstName: 'Updated',
          lastName: 'Name',
        },
      },
      password: {
        summary: 'Password update',
        value: {
          password: 'newpassword123',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'User updated successfully',
    type: UserResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message: 'User with ID clnjakbv20000x9oo3eb3omvq not found',
          error: 'Not Found',
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Validation error',
    content: {
      'application/json': {
        examples: {
          email: {
            value: {
              statusCode: 400,
              message: ['email must be an email'],
              error: 'Bad Request',
            },
          },
          password: {
            value: {
              statusCode: 400,
              message: ['password must be at least 6 characters'],
              error: 'Bad Request',
            },
          },
        },
      },
    },
  })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Delete user',
    description: 'Deletes a user by their ID. Requires admin privileges.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    example: 'clnjakbv20000x9oo3eb3omvq',
  })
  @ApiResponse({
    status: 204,
    description: 'User deleted successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message: 'User with ID clnjakbv20000x9oo3eb3omvq not found',
          error: 'Not Found',
        },
      },
    },
  })
  async remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }

  @Patch(':id/activate')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Activate user',
    description:
      'Activates a deactivated user account. Requires admin privileges.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    example: 'clnjakbv20000x9oo3eb3omvq',
  })
  @ApiOkResponse({
    description: 'User activated successfully',
    type: UserResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message: 'User with ID clnjakbv20000x9oo3eb3omvq not found',
          error: 'Not Found',
        },
      },
    },
  })
  async activateUser(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.activateUser(id);
  }

  @Patch(':id/deactivate')
  @Roles(UserRole.SYS_ADMIN, UserRole.SCHOOL_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Deactivate user',
    description: 'Deactivates a user account. Requires admin privileges.',
  })
  @ApiParam({
    name: 'id',
    description: 'User ID',
    example: 'clnjakbv20000x9oo3eb3omvq',
  })
  @ApiOkResponse({
    description: 'User deactivated successfully',
    type: UserResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - Missing or invalid token',
  })
  @ApiForbiddenResponse({
    description: 'Forbidden - User does not have required role',
  })
  @ApiNotFoundResponse({
    description: 'User not found',
    content: {
      'application/json': {
        example: {
          statusCode: 404,
          message: 'User with ID clnjakbv20000x9oo3eb3omvq not found',
          error: 'Not Found',
        },
      },
    },
  })
  async deactivateUser(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.deactivateUser(id);
  }
}
