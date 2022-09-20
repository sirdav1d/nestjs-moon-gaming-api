import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Nome Sobrenome',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senhA@123',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação de senha do usuário',
    example: 'senhA@123',
  })
  confirmPass: string;

  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty({
    description: 'CPF do usuário',
    example: '12345678910',
  })
  cpf: string;

  @IsBoolean()
  @ApiProperty({
    description: 'Você é um administrador? (true or false)',
    example: 'true',
  })
  isAdmin: boolean;
}
