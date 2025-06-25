

// student-response.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class StudentResponseDto {
  @ApiProperty()
  id: string;
  
  @ApiProperty()
  firstName: string;
  
  @ApiProperty()
  lastName: string;
  
  @ApiProperty({ required: false })
  email?: string;
  
  @ApiProperty({ required: false })
  phone?: string;
  
  @ApiProperty()
  tenantId: string;
  
  @ApiProperty()
  createdAt: Date;
  
  @ApiProperty()
  updatedAt: Date;
}