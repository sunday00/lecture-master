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
        .addSecurity('apiKey', {
          type: 'apiKey',
          in: 'header',
          name: 'Api-Key',
          description: '9XqF7CsiOa8nWJb60sHUuA2Mcguts2OOSJ+WSlOvHpg=',
        })
        .addSecurityRequirements('apiKey')
        .addBearerAuth(
          { type: 'apiKey', in: 'header', name: 'authorization' },
          'authorization',
        )
        .addSecurityRequirements('authorization')
        .build(),
    ),
  );
};
