import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './question/question.module';
import { OptionModule } from './option/option.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import typeormConfig from './configs/typeorm.config';
import { ApiTokenCheckMiddleware } from './middlewares/api-token-check.middleware';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRoot(typeormConfig()),
    EventEmitterModule.forRoot(),
    QuizModule,
    QuestionModule,
    OptionModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(ApiTokenCheckMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
