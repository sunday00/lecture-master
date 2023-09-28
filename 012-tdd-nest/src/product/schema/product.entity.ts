import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ description: 'name', required: true })
  @Column()
  @IsString()
  name: string;

  @ApiProperty({ description: 'description', required: true })
  @Column()
  @IsString()
  description: string;

  @ApiProperty({ description: 'price', required: true })
  @Column()
  @IsNumber()
  price: number;
}
