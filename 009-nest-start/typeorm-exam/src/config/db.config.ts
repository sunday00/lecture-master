import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as path from 'path';

export class TypeOrmModuleOptionsFactory implements TypeOrmOptionsFactory {
  createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5431'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHM,
      entities: ['dist/**/*.entity.js'],
      synchronize: false,
    };
  }
}

export default () => ({
  db: new TypeOrmModuleOptionsFactory().createTypeOrmOptions(),
});
