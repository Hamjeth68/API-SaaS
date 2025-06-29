import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  access_token: string;

  @ApiProperty({
    description: 'Refresh token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  refresh_token: string;

  @ApiProperty({
    description: 'User information',
    type: Object,
  })
  user: Omit<User, 'password' | 'refreshToken'>;
}
