import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ApiProperty({ description: 'name' })
  @Column()
  name: string;

  @ApiProperty({ description: 'description' })
  @Column()
  description: string;

  @ApiProperty({ description: 'price' })
  @Column()
  price: number;
}
