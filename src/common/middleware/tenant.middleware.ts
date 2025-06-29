import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const tenantId = req.headers['x-tenant-id'] || req.query.tenantId;

    if (!tenantId) {
      return res.status(400).json({ message: 'Tenant ID is required' });
    }

    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId as string },
    });

    if (!tenant) {
      return res.status(404).json({ message: 'Tenant not found' });
    }

    req['tenant'] = tenant;
    next();
  }
}
