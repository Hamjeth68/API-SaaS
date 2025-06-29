import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { OnGatewayInit } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: 'communications',
})
export class CommunicationsGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  private logger = new Logger('CommunicationsGateway');
  private userSockets = new Map<string, Socket[]>();

  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  afterInit(server: Server) {
    this.logger.log('WebSocket Gateway initialized');
  }

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token;
      if (!token) {
        client.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token);
      const userId = payload.sub;
      const tenantId = payload.tenantId;

      if (!userId || !tenantId) {
        client.disconnect();
        return;
      }

      // Store the socket connection
      if (!this.userSockets.has(userId)) {
        this.userSockets.set(userId, []);
      }
      const userSockets = this.userSockets.get(userId);
      if (userSockets) {
        userSockets.push(client);
      }

      this.logger.log(
        `Client connected: ${client.id}, User: ${userId}, Tenant: ${tenantId}`,
      );

      // Join tenant room
      client.join(`tenant_${tenantId}`);

      // Listen for chat events
      client.on('join_chat', async (chatId: string) => {
        client.join(`chat_${chatId}`);
        this.logger.log(`User ${userId} joined chat ${chatId}`);
      });

      client.on('send_message', async (data) => {
        // data: { chatId, content }
        const { chatId, content } = data;
        if (!chatId || !content) return;

        // Save message to DB
        const message = await this.prisma.message.create({
          data: {
            chatId,
            senderId: userId,
            content,
          },
          include: {
            sender: true,
          },
        });

        // Emit to all in chat room
        this.server.to(`chat_${chatId}`).emit('new_message', {
          chatId,
          message,
        });
      });
    } catch (error) {
      this.logger.error('Connection error:', error.message);
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    for (const [userId, sockets] of this.userSockets.entries()) {
      const index = sockets.indexOf(client);
      if (index !== -1) {
        sockets.splice(index, 1);
        if (sockets.length === 0) {
          this.userSockets.delete(userId);
        }
        break;
      }
    }
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  notifyNewCommunication(
    tenantId: string,
    communicationId: string,
    audience: string[],
  ) {
    // Notify all users in the tenant who are part of the audience
    this.server.to(`tenant_${tenantId}`).emit('new_communication', {
      communicationId,
      audience,
    });
  }

  // Notify users in a chat (for future extensibility)
  notifyChatUsers(chatId: string, event: string, data: any) {
    this.server.to(`chat_${chatId}`).emit(event, data);
  }

  notifyUser(userId: string, event: string, data: any) {
    const sockets = this.userSockets.get(userId);
    if (sockets) {
      sockets.forEach((socket) => {
        socket.emit(event, data);
      });
    }
  }
}
