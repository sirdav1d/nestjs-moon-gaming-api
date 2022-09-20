import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handleError';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const response: Profile = { ...createProfileDto };

    return this.prisma.profile.create({ data: response }).catch(handleError);
  }

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string) {
    const response = await this.prisma.profile.findUnique({ where: { id } });
    if (!response) {
      throw new NotFoundException(`ID: '${id}' INVÁLIDO`);
    }
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  async update(
    id: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    await this.findById(id);
    const response: Partial<Profile> = { ...updateProfileDto };

    return this.prisma.profile
      .update({ where: { id }, data: response })
      .catch(handleError);
  }

  async delete(id: string): Promise<void> {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }
}
