import { RegisterDto } from 'src/auth/dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

// shared/user-creation.helper.ts
export async function createUserWithHashedPassword(
  prisma: PrismaService,
  dto: CreateUserDto | RegisterDto,
) {
  const hashedPassword = crypto.getRandomValues(new Uint32Array(16)).toString();
  return prisma.user.create({
    data: {
      ...dto,
      password: hashedPassword,
      isActive: dto.isActive ?? true,
    },
  });
}
