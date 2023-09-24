import { registerAs } from '@nestjs/config';

export default registerAs('customConfig', () => ({
  host: 'ho!',
  port: 'Po!',
}));
