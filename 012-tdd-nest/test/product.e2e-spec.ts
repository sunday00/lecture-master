import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Repository } from 'typeorm';
import { ProductEntity } from '../src/product/schema/product.entity';
import { CatcherFilter } from '../src/common/catcher.filter';

describe('AppController (e2e) create', () => {
  let app: INestApplication;
  let repository: Repository<ProductEntity>;
  let body = { name: 'abc', description: 'AAA', price: 100 };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.useGlobalFilters(new CatcherFilter());

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
      .expect(400);
  });

  afterEach(async () => {
    await repository.delete({ name: body.name });

    await app.close();
  });
});

describe('AppController (e2e) read and list', () => {
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

    await repository.save(repository.create(body));
  });

  it('/ (list)', async () => {
    const res = await request(app.getHttpServer()).get('/product').expect(200);

    expect(res.body.length).toBeGreaterThanOrEqual(1);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(
      res.body
        .map((b: ProductEntity) => {
          const { id: _id, ...rest } = b;
          return rest;
        })
        .includes(body),
    );
  });

  it('/:id (read)', async () => {
    const p = await repository.findOne({ where: {}, order: { id: 'DESC' } });
    const res = await request(app.getHttpServer())
      .get(`/product/${p.id}`)
      .expect(200);

    expect(res.body.name).toEqual(body.name);
    expect(res.body.price).toEqual(body.price);
  });

  it('/:id (read) not match return 404', async () => {
    const p = await repository.findOne({ where: {}, order: { id: 'DESC' } });
    const res = await request(app.getHttpServer())
      .get(`/product/${p.id + Math.ceil(Math.random() * 10)}`)
      .expect(404);
  });

  afterEach(async () => {
    await repository.delete({ name: body.name });

    await app.close();
  });
});
