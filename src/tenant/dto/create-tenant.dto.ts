import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreateTenantDto {
  @ApiProperty({
    example: 'Acme School',
    description: 'Name of the tenant/organization',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'acme-school',
    description: 'Unique slug for the tenant',
  })
  @IsString()
  slug: string;

  @ApiProperty({
    example: 'acme.school.com',
    description: 'Subdomain for the tenant',
    required: false,
  })
  @IsOptional()
  @IsString()
  subdomain?: string;

  @ApiProperty({
    example: 'contact@acme-school.com',
    description: 'Contact email for the tenant',
  })
  @IsEmail()
  email: string;


  
  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  logo?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: string[];

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}