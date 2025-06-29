import { Module } from '@nestjs/common';
import { CommunicationsController } from './communications.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { BullModule } from '@nestjs/bull';
import { CommunicationsGateway } from './communications.gateway';
import { CommunicationsProcessor } from './communications.processor';
import { CommunicationsService } from './communications.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    BullModule.registerQueue({
      name: 'communications',
    }),
  ],
  controllers: [CommunicationsController],
  providers: [
    CommunicationsService,
    CommunicationsGateway,
    CommunicationsProcessor,
    JwtService,
  ],
  exports: [CommunicationsService, CommunicationsGateway],
})
export class CommunicationsModule {}
