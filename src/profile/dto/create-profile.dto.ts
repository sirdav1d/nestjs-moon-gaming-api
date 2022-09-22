import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'sirdav1d',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem do perfil',
    example:
      'https://ovicio.com.br/wp-content/uploads/2021/06/20210611-ackerman.jpg',
  })
  image_url: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Jogos favoritos do perfil',
    example: '["84266430-bf9b-48a2-9367-b3dc653bafe2"]',
  })
  games: string[];
}
