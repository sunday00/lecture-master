import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HARDCODE_CONFIG = {
  port: 3000,
  version: '23031113',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(HARDCODE_CONFIG.port);
}
bootstrap()
  .then(() => {
    console.info(`server started on ${HARDCODE_CONFIG.port}`);
  })
  .catch((e) => {
    console.error(e);
  });
