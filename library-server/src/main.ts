import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/***
 * Function starting app
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Library server')
    .setDescription('API for library app for PUM')
    .setVersion('0.1')
    .addTag('Books')
    .addTag('Authors')
    .addTag('Publishers')
    .addTag('Users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v0.1/', app, document);

  await app.listen(3000);
}
bootstrap();
