import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createGenderDto: CreateGenderDto): Promise<Gender> {
    const response: Gender = { ...createGenderDto };

    return this.prisma.gender.create({ data: response });
  }

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string) {
    try {
      return await this.prisma.gender.findUnique({ where: { id } });
    } catch (e) {
      throw new NotFoundException(`ID: ${id} inválido`);
    }
  }

  findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  update(id: string, updateGenderDto: UpdateGenderDto) {
    this.findById(id);
    return `This action updates a #${id} gender`;
  }

  delete(id: string) {
    return `This action removes a #${id} gender`;
  }
}
