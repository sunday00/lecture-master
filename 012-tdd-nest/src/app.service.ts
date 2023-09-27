import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloWithQuery(name: string) {
    return `hello ${name}`;
  }
}
