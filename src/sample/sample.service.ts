import { Injectable } from '@nestjs/common';
import { DependThisService } from '../depend-this/depend-this.service';

@Injectable()
export class SampleService {
  constructor(private dependService: DependThisService) {}

  hello() {
    return 'hello' + this.dependService.getName();
  }
}
