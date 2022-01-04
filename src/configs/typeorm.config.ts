import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as DotEnv from '../utils/DotEnv.functions';

DotEnv.apply();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: process.env.DB_DRIV === 'postgres' ? 'postgres' : 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_BASE,
  schema: process.env.DB_SCHM,
  entities: [__dirname + process.env.DB_ENTT],
  synchronize: process.env.DB_SYNC === 'true' ? true : false,
};
