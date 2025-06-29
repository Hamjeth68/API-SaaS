import { ApiProperty } from '@nestjs/swagger';

export class AttendanceResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  date: string;

  @ApiProperty()
  status: string;

  @ApiProperty({ required: false })
  studentId?: string;

  @ApiProperty({ required: false })
  classId?: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false })
  student?: {
    id: string;
    firstName: string;
    lastName: string;
  };

  @ApiProperty({ required: false })
  class?: {
    id: string;
    name: string;
  };
}
