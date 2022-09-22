import { Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/create-auth.dto';
import { loginResponseDto } from './dto/response-auth.dto';

@Injectable()
export class AuthService {
  async login(loginAuthDto: LoginAuthDto): Promise<loginResponseDto> {
    return {
      token: 'teste',
      user: undefined,
    };
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
