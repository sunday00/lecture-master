import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as DotEnv from './utils/DotEnv.functions';

DotEnv.apply();

async function bootstrap() {
  const port = process.env.APP_PORT ?? 3000;
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  logger.log(`Application running on port: ${port}`);
}
bootstrap();
