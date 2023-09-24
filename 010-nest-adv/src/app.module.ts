import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnalyticsModule } from './analytics/analytics.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';
import { AuthModule } from './auth/auth.module';
import { TempModule } from './temp/temp.module';
import dbConfig from './config/db.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CusromModule } from './cusrom/cusrom.module';
import CustomExampleConfig from './config/custom.example.config';
import jwtConfig from './config/jwt.config';
import { LoggingMiddleware } from './common/middleware/logging.middleware';
import { swaggerAuth } from './config/swagger.config';
import { ThrottlerModule } from '@nestjs/throttler';
import { HealthModule } from './health/health.module';
import sentryConfig from './config/sentry.config';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [CustomExampleConfig, jwtConfig, swaggerAuth, sentryConfig],
    }),
    TypeOrmModule.forRoot(dbConfig().db),
    CusromModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return { a: configService.get('customConfig.host') };
      },
    }),
    AuthModule,
    UserModule,
    VideoModule,
    AnalyticsModule,
    TempModule,
    CusromModule,
    HealthModule,
  ],
  providers: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
