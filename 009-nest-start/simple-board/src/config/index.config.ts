import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import fakeConfig from './fake.config';

// export default ({} = {}) =>
export default () =>
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV ?? 'local'}`,
    load: [fakeConfig],
  });
