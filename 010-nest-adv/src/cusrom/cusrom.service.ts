import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CusromService {
  constructor(private config: ConfigService) {}

  get() {
    return this.config.get('customConfig.host');
  }
}
