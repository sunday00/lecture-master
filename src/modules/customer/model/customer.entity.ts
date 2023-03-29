import { Document, HydratedDocument } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class CustomerEntity extends Document {
  @Prop()
  first_name: string

  @Prop()
  last_name: string

  @Prop()
  readonly email: string

  @Prop()
  readonly phone: string

  @Prop()
  readonly address: string

  @Prop()
  readonly description: string

  @Prop({ default: Date.now() })
  readonly created_at: Date
}

export type CustomerDocument = HydratedDocument<CustomerEntity>

export const CustomerSchema = SchemaFactory.createForClass(CustomerEntity)
