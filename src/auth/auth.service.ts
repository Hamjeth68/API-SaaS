// auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(pass, user.password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const { password, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // Remove sensitive fields
    const { password, ...safeUser } = user;

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: safeUser,
    };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken);
      // No DB check for refreshToken, stateless JWT refresh
      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
      });

      if (!user) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newPayload = { email: user.email, sub: user.id, role: user.role };
      const newAccessToken = this.jwtService.sign(newPayload, {
        expiresIn: '15m',
      });
      const newRefreshToken = this.jwtService.sign(newPayload, {
        expiresIn: '7d',
      });

      // Remove sensitive fields
      const { password, ...safeUser } = user;

      return {
        access_token: newAccessToken,
        refresh_token: newRefreshToken,
        user: safeUser,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async logout(userId: string) {
    return { message: 'Logged out successfully' };
  }

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        ...registerDto,
        password: hashedPassword,
      },
    });

    const { password, ...result } = user;
    return result;
  }
}
