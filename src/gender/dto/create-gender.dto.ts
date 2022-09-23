import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGenderDto {
  @IsString()
  @MaxLength(24)
  @MinLength(3)
  @ApiProperty({
    description: 'Gênero de jogos',
    example: 'RPG',
  })
  name: string;
  @ApiProperty({
    description: 'ID do jogo a ser Adicionado',
    example: ['70501e03-5061-412b-bac7-7f2a3b191c89'],
  })
  games?: string[];
}
