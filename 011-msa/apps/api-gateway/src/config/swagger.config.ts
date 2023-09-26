import { registerAs } from '@nestjs/config';

export default registerAs('swagger', async () => {
  return {
    user: 'a',
    password: 'a',
  };
});
