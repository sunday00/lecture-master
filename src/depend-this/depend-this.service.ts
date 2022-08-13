import { Injectable } from '@nestjs/common';

@Injectable()
export class DependThisService {
  getName(): string {
    return 'Kim';
  }
}
