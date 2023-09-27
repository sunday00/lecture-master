import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './config/swagger.config';
import { HttpExceptionHandlerFilter } from './middlewares/exception-handler/http-exception-handler.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionHandlerFilter());
  swaggerConfig(app);

  await app.listen(3000);
}

bootstrap();
