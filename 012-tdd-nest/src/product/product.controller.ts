import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiNoContentResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductReqStoreDto } from './schema/req.dto';
import { Response } from 'express';

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

  @ApiOperation({ summary: 'update' })
  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductReqStoreDto,
  ) {
    return this.service.update(id, body);
  }

  @ApiOperation({ summary: 'delete' })
  @Delete('/:id')
  @ApiNoContentResponse()
  @HttpCode(204)
  async destroy(@Param('id', ParseIntPipe) id: number) {
    return this.service.destroy(id);
  }
}
