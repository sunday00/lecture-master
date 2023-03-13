import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Option } from './models/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
})
export class OptionModule {}
