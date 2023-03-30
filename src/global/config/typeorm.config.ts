import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'password',
  database: process.env.DB_BASE || 'main',
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  synchronize: process.env.APP_ENV !== 'production',
  logging: false,
});
