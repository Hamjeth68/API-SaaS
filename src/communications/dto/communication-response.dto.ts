import { ApiProperty } from '@nestjs/swagger';

export class CommunicationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  type: string;

  @ApiProperty({ type: [String] })
  audience: string[];

  @ApiProperty()
  tenantId: string;

  @ApiProperty()
  senderId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  sender: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}
