import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.entity';
import { CreateBoardDto } from './dtos/create-board.dto';
import { BoardRepository } from './board.repository';
import { User } from '../auth/user.entity';

@Injectable()
export class BoardService {
  constructor(private readonly repository: BoardRepository) {}

  getAllBoards(page = 1): Promise<Board[]> {
    // return this.repository.find();
    const per = 5;
    const skip = (page - 1) * per;

    return this.repository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.user', 'user')
      .orderBy('board.id', 'DESC')
      .skip(skip)
      .take(per)
      .getMany();
  }

  async getMine(user: User): Promise<Board[]> {
    return await this.repository
      .createQueryBuilder('board')
      .leftJoinAndSelect('board.user', 'user')
      .where('board.userId = :userId', { userId: user.id })
      .getMany();
  }

  createBoard(
    { title, description }: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const board: Board = new Board();
    board.title = title;
    board.description = description;
    board.status = BoardStatus.PUBLIC;
    board.user = user;

    return this.repository.save(board);
  }

  getBoardById(id: number): Promise<Board> {
    return this.repository.findOneBy({ id }).then((board) => {
      if (!board) throw new NotFoundException();

      return board;
    });
  }

  async updateBoardStatusById(
    id: number,
    status: BoardStatus,
    user: User,
  ): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    board.user = user;
    return await this.repository.save(board);
  }

  async deleteById(id: number): Promise<SimpleSuccessResponse> {
    const result = await this.repository.delete(id);

    if (result) throw new NotFoundException();

    return {
      success: true,
      message: 'successfully deleted',
    };
  }

  sayHello(): string {
    return this.repository.sayHello();
  }
}
