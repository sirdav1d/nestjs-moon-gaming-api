import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({
    description: 'Título do jogo',
    example: 'God of War',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de fundo do jogo',
    example: 'https://images3.alphacoders.com/843/843016.jpg',
  })
  cover_image_url: string;

  @IsString()
  @MinLength(4)
  @ApiProperty({
    description: 'Descrição do jogo',
    example:
      'Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.',
  })
  description: string;

  @IsNumber({
    maxDecimalPlaces: 0,
  })
  @Max(2023)
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: 2018,
  })
  year: number;

  @IsNumber({
    maxDecimalPlaces: 1,
  })
  @Max(5)
  @ApiProperty({
    description: 'Nota do jogo no Imdb Score (0 a 5)',
    example: 4.8,
  })
  imdb_score: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link para trailer do jogo',
    example: 'https://youtu.be/FyIwEFXOcaE',
  })
  trailer_youtube_url: string;

  @IsUrl()
  @ApiProperty({
    description: 'Link para gameplay do jogo',
    example: 'https://youtu.be/2qVmxM6b784',
  })
  gameplay_youtube_url: string;

  profiles?: string[];
  genders?: string[];
}
