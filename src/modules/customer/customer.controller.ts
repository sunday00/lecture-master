import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { CustomerService } from './customer.service'
import { CustomerEntity } from './model/Customer.entity'
import { CustomerCreateDto } from './model/customer.create.dto'
import { ApiTags } from '@nestjs/swagger'
import { CustomerUpdateDto } from './model/customer.update.dto'

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly service: CustomerService) {}

  @Get()
  async index(): Promise<CustomerEntity[]> {
    return this.service.list()
  }

  @Get('/:id')
  async show(@Param('id') id: string): Promise<CustomerEntity> {
    return this.service.show(id)
  }

  @Post()
  async store(@Body() dto: CustomerCreateDto): Promise<CustomerEntity> {
    return this.service.store(dto)
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() dto: CustomerUpdateDto,
  ): Promise<CustomerEntity> {
    return this.service.update(id, dto)
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.service.delete(id)
  }
}
