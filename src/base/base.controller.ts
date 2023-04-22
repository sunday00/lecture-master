import { Controller, Get } from '@nestjs/common';
import { BaseService } from './base.service';

@Controller('base')
export class BaseController {
  constructor(private readonly service: BaseService) {}

  @Get()
  index() {
    this.service.list();
  }
}
