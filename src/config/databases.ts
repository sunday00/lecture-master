import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const sqlite: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //TODO: configured from env
  synchronize: true,
};

export const databases = {
  sqlite,
};
