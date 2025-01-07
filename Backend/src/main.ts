import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('NestJS Application')
    .setDescription('API documentation for the NestJS Application')
    .setVersion('1.0')
    .addTag('NestJS API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = 5566;
  await app.listen(port);

  Logger.log(`🚀 Server is running on http://localhost:${port}`);
  Logger.log(`📚 Swagger UI is available at http://localhost:${port}/api`);
}

bootstrap();
