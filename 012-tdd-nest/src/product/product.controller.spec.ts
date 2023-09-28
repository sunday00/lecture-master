import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MockRepositoryFactory } from '../common/mock.repository';
import { ProductEntity } from './schema/product.entity';
import { Repository } from 'typeorm';
import { ProductReqStoreDto } from './schema/req.dto';

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
    expect(controller).toHaveProperty('index');
    expect(controller).toHaveProperty('read');
    expect(controller).toHaveProperty('store');
    expect(controller).toHaveProperty('update');
    expect(controller).toHaveProperty('destroy');
  });

  it('should call store service', () => {
    const spy = jest.spyOn(service, 'store');

    controller.store(body);
    expect(spy).toBeCalledWith(body);
  });

  it('should call index', () => {
    const spy = jest.spyOn(service, 'index');

    controller.index();
    expect(spy).toBeCalled();
  });

  it('should call read', () => {
    const spy = jest.spyOn(service, 'read');

    const id = 1;
    spy.mockReturnValue(
      Promise.resolve({ id, name: '', price: 10, description: '' }),
    );

    controller.read(id);
    expect(spy).toBeCalledWith(id);
  });

  it('should call update service', () => {
    const spy = jest.spyOn(service, 'update');

    controller.update(1, body);
    expect(spy).toBeCalledWith(1, body);
  });

  it('should call delete service', () => {
    const spy = jest.spyOn(service, 'destroy');

    controller.destroy(1);
    expect(spy).toBeCalledWith(1);
  });
});
