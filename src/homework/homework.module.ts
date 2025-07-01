import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { HomeworkController } from './homework.controller';
import { HomeworkService } from './homework.service';
// import { HomeworkController } from './homework.controller';
// import { HomeworkService } from './homework.service';

@Module({
  imports: [PrismaModule],
  controllers: [HomeworkController],
  providers: [HomeworkService],
})
export class HomeworkModule {}
