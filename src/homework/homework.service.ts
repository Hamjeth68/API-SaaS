import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationService } from '../notification/notification.service';
import { Prisma } from 'generated/prisma';
import { CreateHomeworkDto } from './dto/create-homework.dto';
import { UpdateHomeworkDto } from './dto/update-homework.dto';

@Injectable()
export class HomeworkService {
  constructor(
    private prisma: PrismaService,
    private notificationService: NotificationService,
  ) {}

  async create(createHomeworkDto: CreateHomeworkDto): Promise<Homework> {
    const { classId, teacherId, tenantId, ...homeworkData } = createHomeworkDto;

    // Verify the teacher is assigned to the class
    const classTeacher = await this.prisma.class.findFirst({
      where: {
        id: classId,
        teacherId: teacherId,
        tenantId: tenantId,
      },
    });

    if (!classTeacher) {
      throw new ForbiddenException(
        'Teacher is not assigned to this class or does not exist',
      );
    }

    const homework = await this.prisma.homework.create({
      data: {
        ...homeworkData,
        class: { connect: { id: classId } },
        teacher: { connect: { id: teacherId } },
        tenant: { connect: { id: tenantId } },
      },
    });

    // Notify students in the class
    await this.notifyStudentsAboutHomework(homework.id);

    return homework;
  }

  private async notifyStudentsAboutHomework(homeworkId: string) {
    const homework = await this.prisma.homework.findUnique({
      where: { id: homeworkId },
      include: {
        class: {
          include: {
            classStudents: {
              include: {
                student: true,
              },
            },
          },
        },
      },
    });

    if (!homework) return;

    const studentIds = homework.class.classStudents.map((cs) => cs.student.id);

    await this.notificationService.sendHomeworkNotification({
      homeworkId: homework.id,
      title: homework.title,
      dueDate: homework.dueDate,
      studentIds,
      tenantId: homework.tenantId,
    });
  }

  async findAll(filters: {
    classId?: string;
    teacherId?: string;
    studentId?: string;
  }): Promise<Homework[]> {
    const where: Prisma.HomeworkWhereInput = {};

    if (filters.classId) {
      where.classId = filters.classId;
    }

    if (filters.teacherId) {
      where.teacherId = filters.teacherId;
    }

    if (filters.studentId) {
      // Find homeworks for classes the student is enrolled in
      const classStudents = await this.prisma.classStudent.findMany({
        where: { studentId: filters.studentId },
      });

      where.classId = {
        in: classStudents.map((cs) => cs.classId),
      };
    }

    return this.prisma.homework.findMany({
      where,
      orderBy: { dueDate: 'asc' },
    });
  }

  async findOne(id: string): Promise<Homework> {
    const homework = await this.prisma.homework.findUnique({
      where: { id },
    });

    if (!homework) {
      throw new NotFoundException('Homework not found');
    }

    return homework;
  }

  async update(
    id: string,
    updateHomeworkDto: UpdateHomeworkDto,
  ): Promise<Homework> {
    const existingHomework = await this.prisma.homework.findUnique({
      where: { id },
    });

    if (!existingHomework) {
      throw new NotFoundException('Homework not found');
    }

    return this.prisma.homework.update({
      where: { id },
      data: updateHomeworkDto,
    });
  }

  async remove(id: string): Promise<void> {
    await this.prisma.homework.delete({
      where: { id },
    });
  }

  async getSubmissions(homeworkId: string) {
    return this.prisma.homeworkSubmission.findMany({
      where: { homeworkId },
      include: {
        student: true,
        homework: true,
      },
    });
  }
}
