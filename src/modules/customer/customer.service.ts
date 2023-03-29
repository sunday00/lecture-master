import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CustomerEntity } from './model/Customer.entity'
import { CustomerCreateDto } from './model/customer.create.dto'
import { CustomerUpdateDto } from './model/customer.update.dto'

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private customerModel: Model<CustomerEntity>,
  ) {}

  async list(): Promise<CustomerEntity[]> {
    return this.customerModel.find({})
  }

  show(id: string): Promise<CustomerEntity> {
    return this.customerModel.findById(id)
  }

  async store(dto: CustomerCreateDto): Promise<CustomerEntity> {
    const psmt = new this.customerModel(dto)
    return psmt.save()
  }

  async update(id: string, dto: CustomerUpdateDto): Promise<CustomerEntity> {
    return this.customerModel.findByIdAndUpdate(id, dto, { new: true })
  }

  async delete(id: string) {
    const result = await this.customerModel.findByIdAndDelete(id)
    console.log(result)
    return
  }
}
