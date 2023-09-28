import { Injectable } from '@nestjs/common';
import { ProductReqStoreDto } from './schema/req.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './schema/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async index() {
    return this.repository.find({});
  }

  async read(id: number) {
    return this.repository.findOneBy({ id });
  }

  async store(body: ProductReqStoreDto) {
    return this.repository.save(this.repository.create({ ...body }));
  }
}
