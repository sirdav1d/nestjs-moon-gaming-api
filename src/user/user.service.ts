import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handleError';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.confirmPass) {
      throw new BadRequestException('As senhas informadas são diferentes.');
    }

    delete createUserDto.confirmPass;

    const createdUser: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    return this.prisma.user.create({ data: createdUser }).catch(handleError);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    const response = await this.prisma.user.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' INVÁLIDO`);
    }
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async update(id: string, createUserDto: UpdateUserDto): Promise<User> {
    await this.findById(id);

    if (createUserDto.password) {
      if (createUserDto.password != createUserDto.confirmPass) {
        throw new BadRequestException('As senhas informadas são diferentes.');
      }
    }

    delete createUserDto.confirmPass;
    const updatedUser: Partial<User> = { ...createUserDto };

    if (updatedUser.password) {
      updatedUser.password = await bcrypt.hash(updatedUser.password, 10);

      const response = await this.prisma.user
        .update({
          data: updatedUser,
          where: { id },
        })
        .catch(handleError);
      return response;
    }
  }
  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
