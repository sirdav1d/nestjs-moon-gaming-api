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
}
