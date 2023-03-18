import { Body, Controller, Post } from '@nestjs/common';
import { OptionService } from './option.service';
import { OptionCreateDto } from './models/option.create.dto';
import { Option } from './models/option.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('option')
@ApiTags('quiz option')
export class OptionController {
  constructor(private readonly service: OptionService) {}

  @Post('/')
  store(@Body() dto: OptionCreateDto): Promise<Option> {
    return this.service.store(dto);
  }
}
