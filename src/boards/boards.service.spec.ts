import { Test, TestingModule } from '@nestjs/testing';
import { BoardsService } from 'src/boards/boards.service';
import { Board } from 'src/boards/boards.entity';
import { BoardsStatus } from 'src/boards/boards.model';
import { User } from 'src/auth/user.entity';
import { randomUUID } from 'crypto';
// import { getRepositoryToken } from '@nestjs/typeorm';
import { Logger } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { Result } from 'src/results/Result';

const users: User[] = [];
const boards: Board[] = [];

function makeMockUser(username: string): User {
  const user = new User();
  user.id = randomUUID();
  user.password = '*****';
  user.username = username;

  return user;
}

function makeMockCreateDto(title: string, description: string): CreateDto {
  const dto = new CreateDto();
  dto.title = title;
  dto.description = description;

  return dto;
}

function makeMockUpdateDto(title: string, description: string): UpdateDto {
  const dto = new UpdateDto();
  dto.title = title;
  dto.description = description;
  dto.status = BoardsStatus.PRIVATE;

  return dto;
}

class MockRepository {
  private async setBoards(length = 3) {
    for (let i = 0; i < length; i++) {
      const dto = makeMockCreateDto(
        `this is board title ${i + 1}`,
        `this is board description ${i + 1}`,
      );
      const user = makeMockUser(`user${i}`);

      await this.createOne(dto, user);
    }
  }

  async find(): Promise<Board[]> {
    await this.setBoards();
    return boards;
  }

  async getAllByAuth(user: User): Promise<Board[]> {
    return boards.filter((b) => b.user.id === user.id);
  }

  async getOneById(id: number): Promise<Board> {
    return boards.find((b) => b.id === id);
  }

  async createOne(
    { title, description }: CreateDto,
    user: User,
  ): Promise<Board> {
    const b = new Board();
    b.id = boards.length ? boards[boards.length - 1].id + 1 : 1;
    b.title = title;
    b.description = description;
    b.status = BoardsStatus.PUBLIC;
    b.user = user;

    users.push(user);
    boards.push(b);

    return b;
  }

  async updateOneById(id: number, dto: UpdateDto): Promise<Board> {
    const board = await this.getOneById(id);

    for (const k in dto) {
      board[k] = dto[k] ?? board[k];
    }

    return await board;
  }

  async deleteOneById(id: number, user: User): Promise<Result> {
    const b = boards.find((b) => b.id === id && b.user.id === user.id);
    boards.splice(boards.indexOf(b), 1);
    return Result.SUCCESS;
  }
}

class MockLogger {
  verbose = (): string => '';
}

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardsService,
        {
          provide: Logger,
          useClass: MockLogger,
        },
        {
          provide: BoardRepository,
          useClass: MockRepository,
        },
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  describe('getAll', () => {
    it('should return all boards', async () => {
      const result = await service.getAll();
      expect(result.length).toBe(3);
    });
  });

  describe('getAllByAuth', () => {
    it('should return all boards', async () => {
      const user = users[0];
      const result = await service.getAllByAuth(user);
      expect(result[0].title).toBe('this is board title 1');
    });
  });

  describe('getOneById', () => {
    it('should return 1 board', async () => {
      const result = await service.getOneById(1);
      expect(result.title).toBe('this is board title 1');
    });
  });

  describe('create', () => {
    it('should +1 board', async () => {
      const beforeLength = boards.length;

      const dto = makeMockCreateDto('created title', 'created description');
      const user = makeMockUser('creator');
      await service.create(dto, user);

      expect(boards.length).toBe(beforeLength + 1);
    });
  });

  describe('updateOneById', () => {
    it('should edit 1 board', async () => {
      const dto = makeMockUpdateDto('modified title', 'modified description');

      await service.updateOneById(1, dto);

      expect(boards[0].title).toBe(dto.title);
    });
  });

  describe('deleteOneById', () => {
    it('should -1 board', async () => {
      const beforeLength = boards.length;
      const user = users[0];

      await service.deleteOneById(1, user);

      expect(boards.length).toBe(beforeLength - 1);
    });
  });
});
