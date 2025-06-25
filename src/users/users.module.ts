import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { IsExistingTenantValidator } from 'src/validators/is-existing-tenant.validator';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService, IsExistingTenantValidator],
  exports: [UsersService],
})
export class UsersModule {}
