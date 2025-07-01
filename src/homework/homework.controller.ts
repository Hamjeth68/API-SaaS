import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HomeworkResponseDto } from './dto/homework-response.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { HomeworkService } from './homework.service';
import { UserRole } from 'generated/prisma';
import { UpdateHomeworkDto } from './dto/update-homework.dto';

@ApiTags('Homework')
@ApiBearerAuth()
@Controller('homework')
@UseGuards(JwtAuthGuard, RolesGuard)
export class HomeworkController {
  constructor(private readonly homeworkService: HomeworkService) {}

  @Post()
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Create a new homework assignment' })
  @ApiResponse({
    status: 201,
    description: 'Homework created successfully',
    type: HomeworkResponseDto,
  })
  async create(@Body() createHomeworkDto: CreateHomeworkDto) {
    return this.homeworkService.create(createHomeworkDto);
  }

  @Get()
  @Roles(
    UserRole.TEACHER,
    UserRole.SCHOOL_ADMIN,
    UserRole.STUDENT,
    UserRole.PARENT,
  )
  @ApiOperation({ summary: 'Get all homework assignments' })
  @ApiResponse({
    status: 200,
    description: 'List of homework assignments',
    type: [HomeworkResponseDto],
  })
  async findAll(
    @Query('classId') classId?: string,
    @Query('teacherId') teacherId?: string,
    @Query('studentId') studentId?: string,
  ) {
    return this.homeworkService.findAll({ classId, teacherId, studentId });
  }

  @Get(':id')
  @Roles(
    UserRole.TEACHER,
    UserRole.SCHOOL_ADMIN,
    UserRole.STUDENT,
    UserRole.PARENT,
  )
  @ApiOperation({ summary: 'Get a specific homework assignment' })
  @ApiResponse({
    status: 200,
    description: 'Homework assignment details',
    type: HomeworkResponseDto,
  })
  async findOne(@Param('id') id: string) {
    return this.homeworkService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Update a homework assignment' })
  @ApiResponse({
    status: 200,
    description: 'Homework updated successfully',
    type: HomeworkResponseDto,
  })
  async update(
    @Param('id') id: string,
    @Body() updateHomeworkDto: UpdateHomeworkDto,
  ) {
    return this.homeworkService.update(id, updateHomeworkDto);
  }

  @Delete(':id')
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Delete a homework assignment' })
  @ApiResponse({
    status: 200,
    description: 'Homework deleted successfully',
  })
  async remove(@Param('id') id: string) {
    return this.homeworkService.remove(id);
  }

  @Get(':id/submissions')
  @Roles(UserRole.TEACHER, UserRole.SCHOOL_ADMIN)
  @ApiOperation({ summary: 'Get submissions for a homework assignment' })
  @ApiResponse({
    status: 200,
    description: 'List of homework submissions',
  })
  async getSubmissions(@Param('id') homeworkId: string) {
    return this.homeworkService.getSubmissions(homeworkId);
  }
}
