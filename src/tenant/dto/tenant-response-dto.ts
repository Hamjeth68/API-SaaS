import { ApiProperty } from '@nestjs/swagger';

export class TenantResponseDto {
  @ApiProperty({ example: 'cln3h8xjx000008l49w2p5d6z' })
  id: string;

  @ApiProperty({ example: 'Acme School' })
  name: string;

  @ApiProperty({ example: 'acme-school' })
  slug: string;

  @ApiProperty({ example: 'contact@acme-school.com' })
  email: string;

  @ApiProperty({ example: true })
  isActive: boolean;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  createdAt: Date;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  updatedAt: Date;
}
