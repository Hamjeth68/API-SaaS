import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TransportService } from './transport.service';

@Controller('transport')
export class TransportController {
  constructor(private readonly transportService: TransportService) {}

  @Post('route')
  addRoute(@Body() dto: any) {
    return this.transportService.addRoute(dto);
  }

  @Get('routes')
  getRoutes() {
    return this.transportService.getRoutes();
  }

  @Post('bus')
  addBus(@Body() dto: any) {
    return this.transportService.addBus(dto);
  }

  @Get('buses')
  getBuses() {
    return this.transportService.getBuses();
  }

  @Delete('route/:id')
  removeRoute(@Param('id') id: string) {
    return this.transportService.removeRoute(id);
  }

  @Delete('bus/:id')
  removeBus(@Param('id') id: string) {
    return this.transportService.removeBus(id);
  }
}
