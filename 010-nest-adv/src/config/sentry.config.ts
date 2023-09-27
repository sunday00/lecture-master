import { registerAs } from '@nestjs/config';
import * as Sentry from '@sentry/node';

export default registerAs('sentry', () => ({
  dsn: process.env.SENTRY_DSN,
}));

Sentry.init({ dsn: process.env.SENTRY_DSN });
