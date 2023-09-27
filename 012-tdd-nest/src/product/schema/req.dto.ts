import { PartialType } from '@nestjs/swagger';
import { ProductEntity } from './product.entity';

export class ProductReqStoreDto extends PartialType(ProductEntity) {}
