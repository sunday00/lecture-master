import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { CustomerSchema } from './model/customer.schema'
import { CustomerService } from './customer.service'
import { CustomerController } from './customer.controller'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Customer',
        schema: CustomerSchema,
      },
    ]),
  ],
  providers: [CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
