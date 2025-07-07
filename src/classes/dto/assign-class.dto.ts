// Asign class to student
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AssignClassDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  studentId: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  classId: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    teacherId?: string;

    @ApiProperty({ required: true })
    @IsString()
    @IsNotEmpty()
    @Type(() => String)
    tenantId: string;
}
