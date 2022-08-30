import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { CommonFilter } from './common.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({ type: VersioningType.URI });

  app.useGlobalFilters(new CommonFilter(app.get(HttpAdapterHost)));

  await app.listen(3000);
}
bootstrap().catch((e) => console.error(e.error));
