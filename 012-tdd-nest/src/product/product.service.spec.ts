import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductEntity } from './schema/product.entity';
import {
  MockRepository,
  MockRepositoryFactory,
} from '../common/Mock.repository';
import { ProductController } from './product.controller';

describe('ProductService', () => {
  let service: ProductService;
  let repository: MockRepository;
  let body = { name: 'abc', description: 'AAA', price: 100 };

  beforeEach(async () => {
    repository = MockRepositoryFactory.make(ProductEntity);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: repository,
        },
      ],
      controllers: [ProductController],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('should return body', async () => {
      repository.save.mockReturnValue(body);
      const returnV = await service.store(body);
      expect(returnV).toEqual(body);
    });

    it('should err property missing', async () => {
      repository.save.mockRejectedValue('missingName');
      // const returnV = await service.store({ description: 'abc' });
      await expect(service.store({ description: 'abc' })).rejects.toEqual(
        'missingName',
      );
    });
  }

  {
    it('should return lists', async () => {
      repository.find.mockReturnValue([]);
      expect(await service.index()).toEqual([]);
    });

    it('should return one', async () => {
      repository.findOneBy.mockReturnValue(body);
      expect(await service.read(1)).toEqual(body);
    });
  }
});
