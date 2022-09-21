import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handleError';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    const response: Prisma.ProfileCreateInput = {
      user: {
        connect: { id: createProfileDto.userId },
      },
      games: {
        connect: createProfileDto.games.map((gameId) => ({ id: gameId })),
      },
      title: createProfileDto.title,
      image_url: createProfileDto.image_url,
    };
    return await this.prisma.profile
      .create({
        data: response,
        select: {
          id: true,
          title: true,
          image_url: true,
          user: { select: { name: true, isAdmin: true } },
          games: { select: { title: true } },
        },
      })
      .catch(handleError);
  }

  async findAll(): Promise<Profile[]> {
    return this.prisma.profile
      .findMany({
        select: {
          id: true,
          title: true,
          image_url: true,
          user: { select: { name: true, isAdmin: true } },
          _count: { select: { games: true } },
        },
      })
      .catch(handleError);
  }

  async findById(id: string) {
    const response = await this.prisma.profile.findUnique({
      where: { id },
    });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' INVÁLIDO`);
    }
    return this.prisma.profile.findUnique({
      where: { id },
      select: { user: { select: { name: true } }, games: true },
    });
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id).catch(handleError);
  }

  // async update(
  //   id: string,
  //   createProfileDto: UpdateProfileDto,
  // ): Promise<Profile> {
  //   await this.findById(id);

  //   const data: Partial<Profile> = { ...createProfileDto };

  //   return this.prisma.profile
  //     .update({
  //       where: { id },
  //       data,
  //     })
  //     .catch(handleError);
  // }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } }).catch(handleError);
  }
}
