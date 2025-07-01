import { ApiProperty } from '@nestjs/swagger';

export class HomeworkResponseDto implements Homework {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  dueDate: Date;

  @ApiProperty()
  classId: string;

  @ApiProperty()
  teacherId: string;

  @ApiProperty({ type: [String] })
  attachments: string[];

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
