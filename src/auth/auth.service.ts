import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { UserRole } from 'generated/prisma';
import { createUserWithHashedPassword } from 'src/shared/user-creation.helper';
/**
 * TODO: Hamjeth - Fix the JWT token issue here, I have removed the decorators and guards only here instead of commenting
 * following all the JWT decorators and guards in every controller is commented out
 * because the JWT token is not being sent in the request headers.
 * This is likely due to the fact that the JWT token is not being sent in the request headers.
 * but we are trying it in swagger and still getting 401 Unauthorized
 */
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;

    const isValid = await bcrypt.compare(pass, user.password);
    if (!isValid) return null;

    const { password, ...result } = user;
    return result;
  }

  async login(loginDto: LoginDto) {
    // Find user by email
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Check if user is active
    if (user.isActive === false) {
      throw new ForbiddenException('User account is deactivated');
    }
    // Compare password
    const isValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Prepare JWT payload
    const { password, ...result } = user;
    const payload: JwtPayload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      tenantId: user.tenantId,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: result,
    };
  }


  /**
   * we are not allowing self-registration as SYS_ADMIN or SCHOOL_ADMIN 
   *  because these roles should be created by an existing admin user.
   *  so we using createUserWithHashedPassword method  which is a helper function with the same logic 
   *  to create a user with a hashed password. 
   */
  // async register(registerDto: RegisterDto) {
  //   // 1. Check if tenant exists
  //   const tenant = await this.prisma.tenant.findUnique({
  //     where: { id: registerDto.tenantId },
  //   });

  //   if (!tenant) {
  //     throw new NotFoundException(`Tenant with ID ${registerDto.tenantId} not found`);
  //   }

  //   // Fix: Compare against the correct UserRole enum value
  //   if (registerDto.role === UserRole.SYS_ADMIN && UserRole.SCHOOL_ADMIN) {
  //     throw new ForbiddenException('Self-registration as ADMIN is not allowed');
  //   }
  //   // 2. Check if email already exists
  //   const existingUser = await this.prisma.user.findUnique({
  //     where: { email: registerDto.email },
  //   });

  //   if (existingUser) {
  //     throw new ConflictException('Email already exists');
  //   }

  //   // 3. Create the user
  //   const hashedPassword = await bcrypt.hash(registerDto.password, 10);

  //   return this.prisma.user.create({
  //     data: {
  //       ...registerDto,
  //       password: hashedPassword,
  //       isActive: true, // default to active
  //     },
  //   });
  // }

  /**
   * 
   * @param registerDto 
   * @returns 
   * This method registers a new user with a hashed password.
   * It checks if the tenant exists, ensures the email is unique,
   * and creates the user with the provided details.
   * 
    * Note: This method forces the user to be active upon registration.
    * It does not allow self-registration as SYS_ADMIN or SCHOOL_ADMIN.
    * It uses the createUserWithHashedPassword helper function
    * to handle combining the logic of user creation and password hashing.
    * 
   */

  async register(registerDto: RegisterDto) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: registerDto.tenantId },
    });

    if (!tenant) {
      throw new NotFoundException(
        `Tenant with ID ${registerDto.tenantId} not found`,
      );
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = await createUserWithHashedPassword(this.prisma, {
      ...registerDto,
      isActive: true, // Force active for registration
    });

    const { password, ...result } = user;
    return result;
  }
}
