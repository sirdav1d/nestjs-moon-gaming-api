import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handleError';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGameDto: CreateGameDto): Promise<Game> {
    const response: Game = { ...createGameDto };

    return this.prisma.game.create({ data: response }).catch(handleError);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }

  async findById(id: string) {
    const response = await this.prisma.game.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' INVÁLIDO`);
    }
    return this.prisma.game.findUnique({ where: { id } });
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  async update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    await this.findById(id);
    const response: Partial<Game> = { ...updateGameDto };

    return this.prisma.game
      .update({ where: { id }, data: response })
      .catch(handleError);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.game.delete({ where: { id } });
  }
}
