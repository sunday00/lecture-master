import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

const HARDCODE_CONFIG = {
  port: 3000,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '23031113',
  });
  await app.listen(HARDCODE_CONFIG.port);
}
bootstrap()
  .then(() => {
    console.info(`server started on ${HARDCODE_CONFIG.port}`);
  })
  .catch((e) => {
    console.error(e);
  });
