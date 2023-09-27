import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService, registerAs } from '@nestjs/config';
import * as process from 'process';

const userInfo = {
  user: process.env.SWAGGER_USER || 'fastcampus',
  password: process.env.SWAGGER_PASS || 'fastcampus',
};

export default (app: INestApplication) => {
  if (process.env.APP_ENV !== 'prod') {
    const config = new DocumentBuilder()
      .setTitle('NestJS project')
      .setDescription('NestJS project API description')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const customOptions: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
    };
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, customOptions);
  }
};

export const swaggerAuth = registerAs('swaggerAuth', async () => {
  return userInfo;
});
