import { Body, Controller, Get, Post } from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CustomerEntity } from './model/Customer.entity'
import { CustomerCreateDto } from './model/customer.create.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Get()
  async index(): Promise<CustomerEntity[]> {
    return this.service.list()
  }

  @Post()
  async store(@Body() dto: CustomerCreateDto): Promise<CustomerEntity> {
    return this.service.store(dto)
  }
}
