import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/with-query')
  getHelloWithQuery(@Query('name') name = 'world') {
    return this.appService.getHelloWithQuery(name);
  }
}
