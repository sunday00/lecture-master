import { PartialType, PickType } from '@nestjs/swagger';
import { ProductEntity } from './product.entity';

export class ProductReqStoreDto extends PickType(ProductEntity, [
  'name',
  'description',
  'price',
]) {}
