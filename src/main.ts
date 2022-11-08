import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(3001);
}
bootstrap().then((r) => console.log(r));
