import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.model';
import { CreateCatDto } from './createCat.dto';

@Controller('cats')
export class CatsController {
  constructor(private service: CatsService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.service.create(createCatDto);
  }

  @Get()
  findAll(): Cat[] {
    return this.service.findAll();
  }

  @Get('/hello')
  sayHello(): string {
    return this.service.hello();
  }
}
