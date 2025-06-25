import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Req,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Request } from 'express';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UserResponseDto } from '../users/dto/user-response.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LoginResponseDto } from './dto/login-response.dto';


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'User login',
    description: 'Authenticates a user and returns a JWT token',
  })
  @ApiBody({
    type: LoginDto,
    description: 'User credentials',
    examples: {
      admin: {
        summary: 'Admin login',
        value: {
          email: 'admin@example.com',
          password: 'password123',
        },
      },
      user: {
        summary: 'Regular user login',
        value: {
          email: 'user@example.com',
          password: 'password123',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'User authenticated successfully',
    type: LoginResponseDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid credentials',
    content: {
      'application/json': {
        example: {
          statusCode: 401,
          message: 'Invalid credentials',
          error: 'Unauthorized',
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
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'Register new user',
    description: 'Creates a new user account',
  })
  @ApiBody({
    type: RegisterDto,
    description: 'User registration data',
    examples: {
      admin: {
        summary: 'Admin registration',
        value: {
          email: 'admin@example.com',
          password: 'password123',
          firstName: 'Admin',
          lastName: 'User',
          role: 'ADMIN',
          tenantId: 'cmcafv63i0000x9oo3eb3omvq',
        },
      },
      user: {
        summary: 'Regular user registration',
        value: {
          email: 'user@example.com',
          password: 'password123',
          firstName: 'Regular',
          lastName: 'User',
          role: 'USER',
          tenantId: 'cmcafv63i0000x9oo3eb3omvq',
        },
      },
    },
  })
  @ApiCreatedResponse({
    description: 'User registered successfully',
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
          message: 'Tenant with ID 123e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found',
        },
      },
    },
  })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }



}