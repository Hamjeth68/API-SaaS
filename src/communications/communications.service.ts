import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CommunicationPriority,
  CommunicationType,
  CreateCommunicationDto,
} from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';
import { CommunicationsGateway } from './communications.gateway';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { UserRole } from 'generated/prisma';

@Injectable()
export class CommunicationsService {
  constructor(
    private prisma: PrismaService,
    private communicationsGateway: CommunicationsGateway,
    @InjectQueue('communications') private communicationsQueue: Queue,
  ) {}

  async create(
    createCommunicationDto: CreateCommunicationDto & { senderId: string },
  ) {
    try {
      // Ensure senderId is present
      if (!createCommunicationDto.senderId) {
        throw new Error('senderId is required');
      }

      // Prepare the data with required fields
      const data = {
        title: createCommunicationDto.title,
        content: createCommunicationDto.content,
        tenantId: createCommunicationDto.tenantId,
        audience: createCommunicationDto.audience,
        type: createCommunicationDto.type ?? CommunicationType.ANNOUNCEMENT,
        priority:
          createCommunicationDto.priority ?? CommunicationPriority.MEDIUM,
        sendEmail: createCommunicationDto.sendEmail ?? false,
        sendNotification: createCommunicationDto.sendNotification ?? true,
        scheduledAt: createCommunicationDto.scheduledAt,
        expiresAt: createCommunicationDto.expiresAt,
        authorId: createCommunicationDto.senderId,
        senderId: createCommunicationDto.senderId,
      };

      const communication = await this.prisma.communication.create({
        data,
      });

      // Notify relevant users via WebSocket immediately
      this.communicationsGateway.notifyNewCommunication(
        communication.tenantId,
        communication.id,
        communication.audience,
      );

      // Queue email notifications if needed
      if (createCommunicationDto.sendEmail) {
        await this.queueEmailNotifications(
          communication.id,
          communication.tenantId,
          communication.audience,
        );
      }

      // Queue push notifications if needed
      if (createCommunicationDto.sendNotification) {
        await this.queuePushNotifications(
          communication.id,
          communication.tenantId,
          communication.audience,
        );
      }

      return communication;
    } catch (error) {
      console.error('Detailed error:', {
        error: error.message,
        stack: error.stack,
        raw: error,
      });
      throw new InternalServerErrorException('Failed to create communication');
    }
  }

  private async queueEmailNotifications(
    communicationId: string,
    tenantId: string,
    audience: string[],
  ) {
    try {
      // Get recipient emails based on audience (roles or specific user IDs)
      const recipientEmails = await this.getRecipientEmails(tenantId, audience);

      if (recipientEmails.length > 0) {
        await this.communicationsQueue.add(
          'send-email',
          {
            communicationId,
            recipientEmails,
          },
          {
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 2000,
            },
          },
        );
      }
    } catch (error) {
      console.error('Error queueing email notifications:', error);
    }
  }

  private async queuePushNotifications(
    communicationId: string,
    tenantId: string,
    audience: string[],
  ) {
    try {
      // Get recipient user IDs
      const recipientIds = await this.getRecipientIds(tenantId, audience);

      if (recipientIds.length > 0) {
        await this.communicationsQueue.add(
          'send-notification',
          {
            communicationId,
            recipientIds,
            tenantId,
          },
          {
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 2000,
            },
          },
        );
      }
    } catch (error) {
      console.error('Error queueing push notifications:', error);
    }
  }

  private async getRecipientEmails(
    tenantId: string,
    audience: string[],
  ): Promise<string[]> {
    // Check if audience contains roles or user IDs
    const roles = audience.filter((item) =>
      Object.values(UserRole).includes(item as UserRole),
    );
    const userIds = audience.filter(
      (item) => !Object.values(UserRole).includes(item as UserRole),
    );

    const users = await this.prisma.user.findMany({
      where: {
        tenantId,
        OR: [{ role: { in: roles as UserRole[] } }, { id: { in: userIds } }],
      },
      select: { email: true },
    });

    return users.map((user) => user.email).filter((email) => email);
  }

  // Verify tenant access
  public async verifyTenantAccess(communicationId: string, tenantId: string) {
    const communication = await this.prisma.communication.findFirst({
      where: {
        id: communicationId,
        tenantId,
      },
    });

    if (!communication) {
      throw new NotFoundException('Communication not found or access denied');
    }

    return communication;
  }

  private async getRecipientIds(
    tenantId: string,
    audience: string[],
  ): Promise<string[]> {
    // Check if audience contains roles or user IDs
    const roles = audience.filter((item) =>
      Object.values(UserRole).includes(item as UserRole),
    );
    const userIds = audience.filter(
      (item) => !Object.values(UserRole).includes(item as UserRole),
    );

    const users = await this.prisma.user.findMany({
      where: {
        tenantId,
        OR: [{ role: { in: roles as UserRole[] } }, { id: { in: userIds } }],
      },
      select: { id: true },
    });

    return users.map((user) => user.id);
  }

  findAll(tenantId: string) {
    return this.prisma.communication.findMany({
      where: { tenantId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const communication = await this.prisma.communication.findUnique({
      where: { id },
    });

    if (!communication) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }

    return communication;
  }

  async update(id: string, updateCommunicationDto: UpdateCommunicationDto) {
    const existingCommunication = await this.prisma.communication.findUnique({
      where: { id },
    });

    if (!existingCommunication) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }

    const updatedCommunication = await this.prisma.communication.update({
      where: { id },
      data: updateCommunicationDto,
    });

    // Notify about the update via WebSocket
    this.communicationsGateway.notifyNewCommunication(
      updatedCommunication.tenantId,
      updatedCommunication.id,
      updatedCommunication.audience,
    );

    return updatedCommunication;
  }

  async remove(id: string) {
    const existingCommunication = await this.prisma.communication.findUnique({
      where: { id },
    });

    if (!existingCommunication) {
      throw new NotFoundException(`Communication with ID ${id} not found`);
    }

    return this.prisma.communication.delete({
      where: { id },
    });
  }

  // Method to manually retry failed jobs
  async retryFailedEmails(communicationId: string) {
    const communication = await this.findOne(communicationId);
    await this.queueEmailNotifications(
      communication.id,
      communication.tenantId,
      communication.audience,
    );
  }

  // Enhanced findAll with filters
  async findAllWithFilters(filters: {
    tenantId: string;
    type?: string;
    priority?: string;
    page: number;
    limit: number;
  }) {
    const skip = (filters.page - 1) * filters.limit;
    const where: any = { tenantId: filters.tenantId };
    if (filters.type) {
      where.type = filters.type;
    }
    if (filters.priority) {
      where.priority = filters.priority;
    }
    const [communications, total] = await Promise.all([
      this.prisma.communication.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: filters.limit,
      }),
      this.prisma.communication.count({ where }),
    ]);
    return {
      data: communications,
      pagination: {
        total,
        page: filters.page,
        limit: filters.limit,
        totalPages: Math.ceil(total / filters.limit),
      },
    };
  }

  // Find communications for a specific user (basic version, no read tracking)
  async findUserCommunications(filters: {
    userId: string;
    userRole: string;
    tenantId: string;
    unreadOnly: boolean;
    page: number;
    limit: number;
  }) {
    const skip = (filters.page - 1) * filters.limit;
    const where: any = {
      tenantId: filters.tenantId,
      OR: [
        { audience: { has: filters.userRole } },
        { audience: { has: filters.userId } },
      ],
    };
    const communications = await this.prisma.communication.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: filters.limit,
    });
    const total = await this.prisma.communication.count({ where });
    return {
      data: communications,
      pagination: {
        total,
        page: filters.page,
        limit: filters.limit,
        totalPages: Math.ceil(total / filters.limit),
      },
    };
  }

  // Mark communication as read (not implemented, requires schema support)
  async markAsRead(communicationId: string, userId: string) {
    // Implement if you add a communicationRead model/relation
    return;
  }

  // Mark communication as unread (not implemented, requires schema support)
  async markAsUnread(communicationId: string, userId: string) {
    // Implement if you add a communicationRead model/relation
    return;
  }

  // Get communication statistics (basic version)
  async getCommunicationStats(tenantId: string) {
    const totalCommunications = await this.prisma.communication.count({
      where: { tenantId },
    });
    const recentCommunications = await this.prisma.communication.count({
      where: {
        tenantId,
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
        },
      },
    });
    return {
      total: totalCommunications,
      recentCount: recentCommunications,
    };
  }

  // Get audience suggestions
  async getAudienceSuggestions(tenantId: string, search?: string) {
    const roles = Object.values(UserRole);

    const whereClause: any = { tenantId };
    if (search) {
      whereClause.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
      ];
    }

    const users = await this.prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
      },
      take: 50, // Limit results
    });

    return {
      roles: roles.map((role) => ({
        value: role,
        label: role
          .replace('_', ' ')
          .toLowerCase()
          .replace(/\b\w/g, (l) => l.toUpperCase()),
        type: 'role',
      })),
      users: users.map((user) => ({
        value: user.id,
        label: `${user.firstName} ${user.lastName} (${user.email})`,
        type: 'user',
        role: user.role,
      })),
    };
  }
}
