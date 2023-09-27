import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './domain/board/board.module';
import { LoggingMiddleware } from './middlewares/logging/logging.middleware';
import { ConfigModule } from '@nestjs/config';
import IndexConfig from './config/index.config';

@Module({
  imports: [/*ConfigModule.forRoot(),*/ IndexConfig(), BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
