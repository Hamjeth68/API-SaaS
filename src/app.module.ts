import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { StaffModule } from './staff/staff.module';
import { ClassesModule } from './classes/classes.module';
import { AuthController } from './auth/auth.controller';
import { ClassesController } from './classes/classes.controller';
import { StaffController } from './staff/staff.controller';
import { StudentsController } from './students/students.controller';
import { TenantController } from './tenant/tenant.controller';
import { UsersController } from './users/users.controller';
import { AttendanceModule } from './attendance/attendance.module';
import { CommunicationsModule } from './communications/communications.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    TenantModule,
    UsersModule,
    StudentsModule,
    StaffModule,
    ClassesModule,
    AttendanceModule,
    CommunicationsModule,
  ],
  controllers: [
    AppController,
    AuthController,
    TenantController,
    UsersController,
    StudentsController,
    StaffController,
    ClassesController,
  ],
  providers: [AppService],
})
export class AppModule {}
