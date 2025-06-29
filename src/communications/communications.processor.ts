import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { MailerService } from '@nestjs-modules/mailer';
import { Logger } from '@nestjs/common';
import { CommunicationsService } from './communications.service';

@Processor('communications')
export class CommunicationsProcessor {
  private readonly logger = new Logger(CommunicationsProcessor.name);

  constructor(
    private readonly communicationsService: CommunicationsService,
    private readonly mailerService: MailerService,
  ) {}

  @Process('send-email')
  async handleSendEmail(
    job: Job<{
      communicationId: string;
      recipientEmails: string[];
    }>,
  ) {
    try {
      const communication = await this.communicationsService.findOne(
        job.data.communicationId,
      );

      this.logger.log(
        `Sending email for communication ${job.data.communicationId} to ${job.data.recipientEmails.length} recipients`,
      );

      // Send email to each recipient
      const emailPromises = job.data.recipientEmails.map((email) =>
        this.mailerService.sendMail({
          to: email,
          subject: communication.title,
          html: communication.content,
        }),
      );

      await Promise.all(emailPromises);

      this.logger.log(
        `Successfully sent emails for communication ${job.data.communicationId}`,
      );
    } catch (error) {
      this.logger.error(
        `Failed to send emails for communication ${job.data.communicationId}:`,
        error,
      );
      throw error;
    }
  }

  @Process('send-notification')
  async handleSendNotification(
    job: Job<{
      communicationId: string;
      recipientIds: string[];
      tenantId: string;
    }>,
  ) {
    try {
      const communication = await this.communicationsService.findOne(
        job.data.communicationId,
      );

      this.logger.log(
        `Sending notifications for communication ${job.data.communicationId} to ${job.data.recipientIds.length} users`,
      );

      // Here you could integrate with your messaging gateway to send real-time notifications
      // this.messagingGateway.notifyUsers(job.data.recipientIds, 'new_communication', communication);

      // Or create individual chat messages for each recipient
      // This would require integration with ChatService if you want to send as chat messages
    } catch (error) {
      this.logger.error(
        `Failed to send notifications for communication ${job.data.communicationId}:`,
        error,
      );
      throw error;
    }
  }
}
