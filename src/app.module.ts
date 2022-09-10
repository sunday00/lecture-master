import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databases } from './config/databases';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import authConfig from './config/authConfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [authConfig] }),
    TypeOrmModule.forRoot(databases.sqlite),
    AuthModule,
    BoardModule,
  ],
})
export class AppModule {}
