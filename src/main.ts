import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  const swagger = new DocumentBuilder()
    .setTitle('Quiz Manager')
    .setDescription('Quiz api')
    .setVersion(HARDCODE_CONFIG.version)
    // .addTag('cats')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('swagger', app, swaggerDocument);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(HARDCODE_CONFIG.port);
}
bootstrap()
  .then(() => {
    console.info(`server started on ${HARDCODE_CONFIG.port}`);
  })
  .catch((e) => {
    console.error(e);
  });
