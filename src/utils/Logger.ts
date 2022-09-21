import { ConsoleLogger } from '@nestjs/common';
import * as fs from 'fs';
import * as dayjs from 'dayjs';

export class Logger extends ConsoleLogger {
  verbose(message: any) {
    super.verbose(message);

    const path = './storage/logs';

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    const filename = `${path}/${dayjs().format('YYMMDD')}.log`;

    const data = `${dayjs().format('HH:mm:ss')} : ${message} \n`;

    fs.appendFileSync(filename, data, 'utf-8');
  }
}
