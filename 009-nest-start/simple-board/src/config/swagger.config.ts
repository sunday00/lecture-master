import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { readdirSync } from 'fs';
import * as path from 'path';

export const swaggerConfig = (app: INestApplication) => {
  const swaggerConfigBuilder = new DocumentBuilder()
    .setTitle('simple-board')
    .setDescription('simple nestjs example')
    .setVersion('0.1');

  const domains = readdirSync(path.resolve('src/domain'));
  for (let domain of domains) {
    swaggerConfigBuilder.addTag(domain);
  }

  const swaggerConfig = swaggerConfigBuilder.build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
};
