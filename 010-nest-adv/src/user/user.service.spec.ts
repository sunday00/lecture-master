import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

class MockRepository {
  async findOneBy(query: { email: string }) {
    const user: User = new User();
    user.email = query.email;
    return user;
  }
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: MockRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be get email', async () => {
    // expect(service).toBeDefined();
    const email = 'nestjs@fastcampus.com';
    const result = await service.findOneByEmail(email);

    expect(result.email).toBe(email);
  });
});
