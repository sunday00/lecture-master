import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Repository } from 'typeorm';
import { ProductEntity } from '../src/product/schema/product.entity';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<ProductEntity>;
  let body = { name: 'abc', description: 'AAA', price: 100 };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    repository = app.get('ProductEntityRepository');
  });

  it('/ (POST)', async () => {
    const exists = await repository.findOne({
      where: {},
      order: { id: 'DESC' },
    });

    const existCount = await repository.count();

    const res = await request(app.getHttpServer())
      .post('/product')
      .send(body)
      .expect(201);

    const newCount = await repository.count();

    expect(res.body.id).toBeGreaterThan(exists.id);
    expect(newCount).toBe(existCount + 1);
  });

  it('/ (POST) should not create when notEnough property', async () => {
    await request(app.getHttpServer())
      .post('/product')
      .send({ price: 300 })
      .expect(500);
  });

  afterEach(async () => {
    await repository.delete({ name: body.name });

    await app.close();
  });
});
