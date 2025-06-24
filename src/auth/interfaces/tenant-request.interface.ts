import { Tenant } from "generated/prisma";

export interface TenantRequest extends Request {
  tenant: Tenant;
}