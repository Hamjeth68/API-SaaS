import { ApiProperty } from '@nestjs/swagger';

export class ClassResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  grade?: string;

  @ApiProperty({ required: false })
  section?: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty({ required: false })
  teacherId?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false })
  teacher?: {
    id: string;
    staffId: string;
    position: string;
    user: {
      firstName: string;
      lastName: string;
    };
  };

  @ApiProperty({ type: () => [ClassStudentDto] })
  students?: ClassStudentDto[];
}

class ClassStudentDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;
}
