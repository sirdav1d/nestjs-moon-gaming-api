import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginAuthDto } from './dto/create-auth.dto';
import { loginResponseDto } from './dto/response-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginAuthDto: LoginAuthDto): Promise<loginResponseDto> {
    const { email, password } = loginAuthDto;

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const isValidPass = await bcrypt.compare(password, user.password);

    if (!isValidPass) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    delete user.password;
    return {
      token: this.jwtService.sign({ email }),
      user: user,
    };
  }
}
