import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'IsExistingTenant', async: true })
@Injectable()
export class IsExistingTenantValidator implements ValidatorConstraintInterface {
  constructor(private prisma: PrismaService) {}

  async validate(tenantId: string, args: ValidationArguments) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
    });
    return !!tenant;
  }

  defaultMessage(args: ValidationArguments) {
    return `Tenant with ID ${args.value} does not exist`;
  }
}