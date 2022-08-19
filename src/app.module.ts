import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databases } from './config/databases';

@Module({
  imports: [BoardModule, TypeOrmModule.forRoot(databases.sqlite)],
})
export class AppModule {}
