import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CustomerEntity } from './model/Customer.entity'
import { CustomerCreateDto } from './model/customer.create.dto'

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<CustomerEntity>,
  ) {}

  async list(): Promise<CustomerEntity[]> {
    return this.customerModel.find({})
  }

  async store(dto: CustomerCreateDto): Promise<CustomerEntity> {
    const psmt = new this.customerModel(dto)
    return psmt.save()
  }
}
