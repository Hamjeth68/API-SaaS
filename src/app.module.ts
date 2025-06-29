import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendanceModule } from './attendance/attendance.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ClassesController } from './classes/classes.controller';
import { ClassesModule } from './classes/classes.module';
import { CommunicationsModule } from './communications/communications.module';
import { FeesModule } from './fees/fees.module';
import { PrismaModule } from './prisma/prisma.module';
import { StaffController } from './staff/staff.controller';
import { StaffModule } from './staff/staff.module';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { TenantController } from './tenant/tenant.controller';
import { TenantModule } from './tenant/tenant.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST || 'localhost',
        port: parseInt(process.env.MAIL_PORT || '587'),
        secure: process.env.MAIL_SECURE === 'true',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: `"${process.env.MAIL_FROM_NAME || 'School Management'}" <${process.env.MAIL_FROM}>`,
      },
      template: {
        dir: join(__dirname, '..', 'templates'), // Path to your email templates
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),

    CommunicationsModule,
    PrismaModule,
    AuthModule,
    TenantModule,
    UsersModule,
    StudentsModule,
    StaffModule,
    ClassesModule,
    AttendanceModule,
    FeesModule,
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
