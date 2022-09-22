import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Gender } from './entities/gender.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Gender')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um gênero de jogos',
  })
  create(@Body() createGenderDto: CreateGenderDto): Promise<Gender> {
    return this.genderService.create(createGenderDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Imprime todos os gêneros de jogos',
  })
  findAll(): Promise<Gender[]> {
    return this.genderService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Imprime um gênero de jogos pelo ID',
  })
  findOne(@Param('id') id: string): Promise<Gender> {
    return this.genderService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edita um gênero de jogos pelo ID',
  })
  update(
    @Param('id') id: string,
    @Body() updateGenderDto: UpdateGenderDto,
  ): Promise<Gender> {
    return this.genderService.update(id, updateGenderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deleta um gênero de jogos pelo ID',
  })
  delete(@Param('id') id: string): void {
    this.genderService.delete(id);
  }
}
