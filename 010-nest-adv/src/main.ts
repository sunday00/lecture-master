import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';
import WinstonConfig from './config/winston.config';
import { TransformInterceptor } from './common/middleware/transform.interceptor';
import { ConfigService } from '@nestjs/config';
import { SentryInterceptor } from './common/middleware/sentry.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonConfig(),
  });

  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT');

  // Swagger
  swaggerConfig(app);

  // ValidationPipe 전역 적용
  app.useGlobalPipes(
    new ValidationPipe({
      // class-transformer 적용
      transform: true,
    }),
  );

  app.useGlobalInterceptors(new SentryInterceptor(), new TransformInterceptor());

  await app.listen(port);
  Logger.log(`listening on port ${port}`);
}
bootstrap();
