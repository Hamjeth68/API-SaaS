import { ApiProperty } from '@nestjs/swagger';

export class FeeResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  amount: number;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  status: string;

  @ApiProperty()
  dueDate: string;

  @ApiProperty({ required: false })
  paidDate?: string;

  @ApiProperty()
  studentId: string;

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
}
