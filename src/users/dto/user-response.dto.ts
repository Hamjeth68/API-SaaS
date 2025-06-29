import { PickType } from '@nestjs/mapped-types';
import { UserEntity } from '../entities/user.entity';

export class UserResponseDto extends PickType(UserEntity, [
  'id',
  'email',
  'firstName',
  'lastName',
  'role',
  'isActive',
  'createdAt',
] as const) {}
