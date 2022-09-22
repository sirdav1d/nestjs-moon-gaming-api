import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Moon Gaming')
    .setDescription('Aplicação para gestão de plataforma de jogos')
    .setVersion('2.0.0')
    .addTag('Status')
    .addTag('Auth')
    .addTag('User')
    .addTag('Profile')
    .addTag('Gender')
    .addTag('Game')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
