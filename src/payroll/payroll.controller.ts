import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PayrollService } from './payroll.service';

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('process')
  processPayroll(@Body() dto: any) {
    return this.payrollService.processPayroll(dto);
  }

  @Get('history/:employeeId')
  getPayrollHistory(@Param('employeeId') employeeId: string) {
    return this.payrollService.getPayrollHistory(employeeId);
  }

  @Get()
  findAll() {
    return this.payrollService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollService.remove(id);
  }
}
