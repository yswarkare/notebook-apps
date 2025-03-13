import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true,
  });
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false, limit: '30mb' }));
  app.use(bodyParser.json({ limit: '30mb' }));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      stopAtFirstError: true,
    }),
  );
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
