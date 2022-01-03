import * as dotenv from 'dotenv';
import * as path from 'path';

export const apply = () => {
  dotenv.config({
    path: path.resolve(
      process.env.NODE_ENV === 'prod' ? '.prod.env' : '.dev.env',
    ),
  });
};
