import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is a global middleware');
  next();
}

function globalMiddlewareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is a global middleware two');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddleware, globalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();
