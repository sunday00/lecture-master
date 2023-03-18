import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (
  path: string,
  version: string,
  app: INestApplication,
) => {
  SwaggerModule.setup(
    path,
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Quiz Manager')
        .setDescription('Quiz api')
        .setVersion(version)
        // .addTag('cats')
        .build(),
    ),
  );
};
