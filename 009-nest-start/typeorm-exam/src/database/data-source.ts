import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import dbConfig from '../config/db.config';

config({ path: '.env.local' });

export default new DataSource({
  ...dbConfig().db,
  entities: ['src/**/*.entity.ts'],
} as DataSourceOptions);
