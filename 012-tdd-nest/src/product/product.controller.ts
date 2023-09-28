import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductReqStoreDto } from './schema/req.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @ApiOperation({ summary: 'list' })
  @Get('/')
  async index() {
    return this.service.index();
  }

  @ApiOperation({ summary: 'read' })
  @Get('/:id')
  async read(@Param('id', ParseIntPipe) id: number) {
    return this.service.read(id);
  }

  @ApiOperation({ summary: 'store' })
  @Post('/')
  async store(@Body() body: ProductReqStoreDto) {
    return this.service.store(body);
  }
}
