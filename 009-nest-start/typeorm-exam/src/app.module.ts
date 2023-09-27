import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './domain/board/board.module';
import { LoggingMiddleware } from './middlewares/logging/logging.middleware';
import IndexConfig from './config/index.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './config/db.config';

@Module({
  imports: [IndexConfig(), TypeOrmModule.forRoot(dbConfig().db), BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
