import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateHomeworkDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dueDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  classId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  teacherId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  tenantId: string;

  @ApiProperty({ type: [String], required: false })
  @IsArray()
  attachments?: string[];
}
