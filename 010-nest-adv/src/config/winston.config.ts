import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

export default () => {
  return WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: process.env.STAGE === 'prod' ? 'info' : 'debug',
        format: winston.format.combine(
          winston.format.timestamp(),
          utilities.format.nestLike('NestJsVideo', { prettyPrint: true }),
        ),
      }),
    ],
  });
};
