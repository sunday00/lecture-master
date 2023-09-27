import { User } from '../user/entity/user.entity';
import { Video } from './entity/video.entity';
import { CreateVideoHandler } from './command/create-video.handler';
import { EventBus } from '@nestjs/cqrs';
import { Test } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { CreateVideoCommand } from './command/create-video.command';

class QueryRunner {
  constructor(private manager: Manager) {}

  async startTransaction() {}
  async commitTransaction() {}
  async rollbackTransaction() {}
  async release() {}
}

class Manager {
  async findOneBy(user: User, where: { id: string }) {}
  async create(video: Video, options: { title: string; mimetype: string; user: User }) {
    return video;
  }
  async save(video: Video) {
    return video;
  }
}

describe('createVideoHandler', () => {
  let createVideoHandler: CreateVideoHandler;
  let eventBus: jest.Mocked<EventBus>;

  const videoId = 'f22a8fa8-836a-4141-9194-9ce9d0eee033';

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateVideoHandler,
        {
          provide: DataSource,
          useValue: {
            createQueryRunner: jest.fn().mockReturnValue(new QueryRunner(new Manager())),
          },
        },
        {
          provide: EventBus,
          useValue: {
            publish: jest.fn(),
          },
        },
      ],
    }).compile();

    createVideoHandler = module.get(CreateVideoHandler);
    eventBus = module.get(EventBus);
  });

  describe('execute', () => {
    it('should execute CreateVideoHandler', async () => {
      await createVideoHandler.execute(new CreateVideoCommand(videoId, 'test', 'video/mp4', 'mp4', Buffer.from([])));

      expect(eventBus.publish).toBeCalledTimes(1);
    });
  });
});
