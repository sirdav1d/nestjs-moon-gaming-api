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
    const response = await this.prisma.gender.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' inválido`);
    }
    return this.prisma.gender.findUnique({ where: { id } });
  }

  findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  update(id: string, updateGenderDto: UpdateGenderDto): Promise<Gender> {
    this.findById(id);
    const response: Partial<Gender> = { ...updateGenderDto };

    return this.prisma.gender.update({ where: { id }, data: response });
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.gender.delete({ where: { id } });
  }
}
