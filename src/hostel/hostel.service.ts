import { Injectable } from '@nestjs/common';

@Injectable()
export class HostelService {
  addRoom(dto: any) {
    // Add a new hostel room
    return { message: 'Room added', data: dto };
  }
  getRooms() {
    // List all rooms
    return [];
  }
  allocateRoom(dto: any) {
    // Allocate a room to a student
    return { message: 'Room allocated', data: dto };
  }
  getAllocations() {
    // List all room allocations
    return [];
  }
  removeRoom(id: string) {
    // Remove a room
    return { message: `Room ${id} removed` };
  }
}
