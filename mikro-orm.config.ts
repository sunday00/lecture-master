import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';

const logger = new Logger('MikroORM');
const config: Options = {
  entities: ['./dist/**/model/*.entity.js'],
  entitiesTs: ['./src/**/model/*.entity.ts'],
  dbName: process.env.DB_NAME,
  type: 'mariadb',
  port: parseInt(process.env.DB_PORT),
  debug: true,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  logger: logger.log.bind(logger),
};

export default config;
