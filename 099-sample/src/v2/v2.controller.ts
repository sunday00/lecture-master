import { Controller, Get } from '@nestjs/common';

@Controller('v2')
export class V2Controller {
  @Get('/')
  get() {
    return 2;
  }
}
