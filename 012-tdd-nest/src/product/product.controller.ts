import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductReqStoreDto } from './schema/req.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @ApiOperation({ summary: 'store' })
  @Post('/')
  async store(@Body() body: ProductReqStoreDto) {
    return this.service.store(body);
  }
}
