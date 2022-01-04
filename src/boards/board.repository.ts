import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { BoardsStatus } from './boards.model';
import { CreateDto } from './dto/create.dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createOne({ title, description }: CreateDto): Promise<Board> {
    const board: Board = this.create({
      title,
      description,
      status: BoardsStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
