import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? Number(process.env.POSTGRES_PORT) : 5433,
  database: process.env.POSTGRES_DATABASE || 'video-service',
  username: process.env.POSTGRES_USERNAME || 'video-service',
  password: process.env.POSTGRES_PASSWORD || 'video-service',
}));
