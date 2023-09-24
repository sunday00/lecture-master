import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class V1Controller {
  @Get('/')
  get() {
    return 1;
  }
}
