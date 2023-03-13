import { Body, Controller, Post } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionCreateDto } from './models/option.create.dto';
import { Option } from './models/option.entity';

@Controller('option')
export class OptionController {
  constructor(private readonly service: OptionService) {}

  @Post('/')
  store(@Body() dto: OptionCreateDto): Promise<Option> {
    return this.service.store(dto);
  }
}
