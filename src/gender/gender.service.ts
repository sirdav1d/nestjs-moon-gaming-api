import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handleError';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGenderDto: CreateGenderDto): Promise<Gender> {
    const response: Prisma.GenderCreateInput = {
      games: {
        connect: createGenderDto.games.map((gameId) => ({ id: gameId })),
      },
      name: createGenderDto.name,
    };

    return this.prisma.gender.create({ data: response }).catch(handleError);
  }

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany({
      select: { name: true, id: true, _count: { select: { games: true } } },
    });
  }

  async findById(id: string) {
    const response = await this.prisma.gender.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' INVÁLIDO`);
    }
    return this.prisma.gender.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        games: {
          select: {
            id: true,
            cover_image_url: true,
            imdb_score: true,
            title: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  async update(id: string, createGenderDto: UpdateGenderDto): Promise<Gender> {
    await this.findById(id);
    const response: Prisma.GenderUpdateInput = {
      games: {
        connect: createGenderDto.games.map((gameId) => ({ id: gameId })),
      },
      name: createGenderDto.name,
    };

    return this.prisma.gender
      .update({
        where: { id },
        data: response,
        select: {
          id: true,
          name: true,
          games: {
            select: {
              id: true,
              cover_image_url: true,
              imdb_score: true,
              title: true,
            },
          },
        },
      })
      .catch(handleError);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.gender.delete({ where: { id } });
  }
}
