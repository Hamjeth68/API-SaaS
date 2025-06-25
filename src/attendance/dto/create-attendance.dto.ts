import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';
import { AttendanceStatus } from 'generated/prisma';

export class CreateAttendanceDto {
  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty({ enum: AttendanceStatus })
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @ApiProperty({ required: false })
  @IsString()
  studentId?: string;

  @ApiProperty({ required: false })
  @IsString()
  classId?: string;

  @ApiProperty()
  @IsString()
  tenantId: string;
}
