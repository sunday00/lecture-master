import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MockRepositoryFactory } from '../common/Mock.repository';
import { ProductEntity } from './schema/product.entity';
import { Repository } from 'typeorm';

class MockService extends ProductService {}

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;
  let body = { name: 'abc', description: 'AAA', price: 100 };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: new MockService(
            MockRepositoryFactory.make(
              ProductEntity,
            ) as Repository<ProductEntity>,
          ),
        },
      ],
      controllers: [ProductController],
    }).compile();

    controller = module.get(ProductController);
    service = module.get(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined crud methods', () => {
    // expect(controller).toHaveProperty('index');
    // expect(controller).toHaveProperty('read');
    expect(controller).toHaveProperty('store');
    // expect(controller).toHaveProperty('update');
    // expect(controller).toHaveProperty('destroy');
  });

  it('should call store service', () => {
    const spy = jest.spyOn(service, 'store');

    controller.store(body);
    expect(spy).toBeCalledWith(body);
  });
});
