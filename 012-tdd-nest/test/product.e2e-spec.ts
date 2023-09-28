import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Repository } from 'typeorm';
import { ProductEntity } from '../src/product/schema/product.entity';
import { CatcherFilter } from '../src/common/catcher.filter';

const commonBeforeEach = async (addRow = false) => {
  let body = { name: 'abc', description: 'AAA', price: 100 };

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleFixture.createNestApplication();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new CatcherFilter());

  await app.init();

  const repository = app.get('ProductEntityRepository');

  if (addRow) await repository.save(repository.create(body));

  return { app, repository, body };
};

describe('AppController (e2e) create', () => {
  let app: INestApplication;
  let repository: Repository<ProductEntity>;
  let body: { name: string; description: string; price: number };

  beforeEach(async () => {
    const {
      app: appV,
      repository: repositoryV,
      body: bodyV,
    } = await commonBeforeEach();
    app = appV;
    repository = repositoryV;
    body = bodyV;
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
  let body: { name: string; description: string; price: number };

  beforeEach(async () => {
    const {
      app: appV,
      repository: repositoryV,
      body: bodyV,
    } = await commonBeforeEach(true);
    app = appV;
    repository = repositoryV;
    body = bodyV;
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
    await request(app.getHttpServer())
      .get(`/product/${p.id + Math.ceil(Math.random() * 10)}`)
      .expect(404);
  });

  it('/ (update)', async () => {
    const p = await repository.findOne({ where: {}, order: { id: 'DESC' } });
    const res = await request(app.getHttpServer())
      .put(`/product/${p.id}`)
      .send({ ...body, price: body.price + 100 })
      .expect(200);

    expect(res.body.affected).toEqual(1);

    const updated = await repository.findOneBy({ id: p.id });
    expect(updated.price).toEqual(body.price + 100);
  });

  afterEach(async () => {
    await repository.delete({ name: body.name });

    await app.close();
  });
});

describe('AppController (e2e) delete', () => {
  let app: INestApplication;
  let repository: Repository<ProductEntity>;

  beforeEach(async () => {
    const { app: appV, repository: repositoryV } = await commonBeforeEach(true);
    app = appV;
    repository = repositoryV;
  });

  it('/:id (delete)', async () => {
    const p = await repository.findOne({ where: {}, order: { id: 'DESC' } });
    const res = await request(app.getHttpServer())
      .delete(`/product/${p.id}`)
      .expect(204);

    await request(app.getHttpServer()).get(`/product/${p.id}`).expect(404);
  });

  afterEach(async () => {
    await app.close();
  });
});
