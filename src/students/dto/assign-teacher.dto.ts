// Asign Teacher to Student
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class AssignTeacherDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  teacherId: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  tenantId: string;
}
