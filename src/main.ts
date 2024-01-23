import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is a global middleware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(globalMiddleware); //Global middleware

  // Swagger integration
  const config = new DocumentBuilder()
    .setTitle('Books')
    .setDescription('The books API description')
    .setVersion('1.0')
    .addTag('books')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
