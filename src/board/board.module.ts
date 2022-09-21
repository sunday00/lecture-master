import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../auth/jwt.strategy';
import { Logger } from '../utils/Logger';

@Module({
  imports: [TypeOrmModule.forFeature([Board]), PassportModule, AuthModule],
  controllers: [BoardController],
  providers: [BoardRepository, BoardService, JwtStrategy, Logger],
  exports: [BoardService, Logger],
})
export class BoardModule {}
