import { ApiProperty } from '@nestjs/swagger';

export class StaffResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  staffId: string;

  @ApiProperty()
  position: string;

  @ApiProperty({ required: false })
  department?: string;

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
}
