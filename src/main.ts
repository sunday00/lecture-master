import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { swaggerConfig } from './configs/swagger.config';
import { PaginatePipe } from './middlewares/paginate.pipe';
import { ApiTokenHandlerFilter } from './middlewares/api-token.handler.filter';

const HARDCODE_CONFIG = {
  port: 3000,
  version: '23031113',
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: HARDCODE_CONFIG.version,
  });

  swaggerConfig('swagger', HARDCODE_CONFIG.version, app);

  app.useGlobalPipes(new ValidationPipe()).useGlobalPipes(new PaginatePipe());
  app.useGlobalFilters(new ApiTokenHandlerFilter());

  await app.listen(HARDCODE_CONFIG.port);
}
bootstrap()
  .then(() => {
    console.info(`server started on ${HARDCODE_CONFIG.port}`);
  })
  .catch((e) => {
    console.error(e);
  });
