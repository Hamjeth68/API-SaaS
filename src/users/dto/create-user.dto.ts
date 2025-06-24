import { IsString, IsEmail, MinLength, IsEnum, IsBoolean, IsOptional } from 'class-validator';
import { UserRole } from 'generated/prisma';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEnum(UserRole)
  role: UserRole;

  @IsString()
  tenantId: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}