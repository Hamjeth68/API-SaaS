import {
  IsString,
  IsArray,
  IsOptional,
  IsBoolean,
  IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum CommunicationType {
  ANNOUNCEMENT = 'ANNOUNCEMENT',
  NOTICE = 'NOTICE',
  ALERT = 'ALERT',
  MESSAGE = 'MESSAGE',
}

export enum CommunicationPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export class CreateCommunicationDto {
  @ApiProperty({ description: 'Title of the communication' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Content of the communication' })
  @IsString()
  content: string;

  @ApiProperty({ description: 'Tenant ID' })
  @IsString()
  tenantId: string;

  @ApiProperty({
    description: 'Audience (roles or user IDs)',
    example: ['TEACHER', 'PARENT', 'user-id-123'],
  })
  @IsArray()
  @IsString({ each: true })
  audience: string[];

  @ApiProperty({
    enum: CommunicationType,
    description: 'Type of communication',
    default: CommunicationType.ANNOUNCEMENT,
  })
  @IsOptional()
  @IsEnum(CommunicationType)
  type?: CommunicationType;

  @ApiProperty({
    enum: CommunicationPriority,
    description: 'Priority level',
    default: CommunicationPriority.MEDIUM,
  })
  @IsOptional()
  @IsEnum(CommunicationPriority)
  priority?: CommunicationPriority;

  @ApiProperty({ description: 'ID of the user sending the communication' })
  @IsString()
  senderId: string;
  @ApiProperty({
    description: 'Send email notifications',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  sendEmail?: boolean = false;

  @ApiProperty({
    description: 'Send push notifications',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  sendNotification?: boolean = true;

  @ApiProperty({
    description: 'Schedule communication for later',
    required: false,
  })
  @IsOptional()
  scheduledAt?: Date;

  @ApiProperty({
    description: 'Expiry date for the communication',
    required: false,
  })
  @IsOptional()
  expiresAt?: Date;
}
