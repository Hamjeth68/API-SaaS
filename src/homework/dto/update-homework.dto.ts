import { PartialType } from '@nestjs/swagger';
import { HomeworkResponseDto } from './homework-response.dto';

export class UpdateHomeworkDto extends PartialType(HomeworkResponseDto) {}
