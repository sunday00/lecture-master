import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Board } from './model/board.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Board])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
