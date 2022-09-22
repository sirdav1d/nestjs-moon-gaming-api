import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class loginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGVtYWlsLmNvbSIsImlhdCI6MTY2MzgyMjYyNCwiZXhwIjoxNjYzODg3NDI0fQ.yCwWs4jxWr5Mi9RXdy5WEjOguj6kwRBTXDRmXN-iBZA',
  })
  token: string;

  @ApiProperty({
    description: 'Usuário autenticado',
  })
  user: User;
}
