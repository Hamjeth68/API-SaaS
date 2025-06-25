import { UserRole } from 'generated/prisma';

export class UserEntity {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}
