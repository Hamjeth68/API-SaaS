import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AcademicYearService } from './academic-year.service';

@Controller('academic-year')
export class AcademicYearController {
  constructor(private readonly academicYearService: AcademicYearService) {}

  @Post()
  create(@Body() dto: any) {
    return this.academicYearService.create(dto);
  }

  @Get()
  findAll() {
    return this.academicYearService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicYearService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.academicYearService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicYearService.remove(id);
  }
}
