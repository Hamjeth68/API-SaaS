import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StudyMaterialsService } from './study-materials.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('study-materials')
export class StudyMaterialsController {
  constructor(private readonly studyMaterialsService: StudyMaterialsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File) {
    return this.studyMaterialsService.upload(file);
  }

  @Get()
  findAll() {
    return this.studyMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studyMaterialsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studyMaterialsService.remove(id);
  }
}
