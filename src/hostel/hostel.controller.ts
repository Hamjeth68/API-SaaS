import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { HostelService } from './hostel.service';

@Controller('hostel')
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Post('room')
  addRoom(@Body() dto: any) {
    return this.hostelService.addRoom(dto);
  }

  @Get('rooms')
  getRooms() {
    return this.hostelService.getRooms();
  }

  @Post('allocate')
  allocateRoom(@Body() dto: any) {
    return this.hostelService.allocateRoom(dto);
  }

  @Get('allocations')
  getAllocations() {
    return this.hostelService.getAllocations();
  }

  @Delete('room/:id')
  removeRoom(@Param('id') id: string) {
    return this.hostelService.removeRoom(id);
  }
}
