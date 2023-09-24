import { Controller, Get } from '@nestjs/common';
import { CusromService } from './cusrom.service';
import { Public } from '../common/decorator/public.decorator';

@Controller('cusrom')
export class CusromController {
  constructor(private readonly service: CusromService) {}

  @Get('/')
  @Public()
  get() {
    throw new Error('Oops');
    return this.service.get();
  }
}
