import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRoleEnum } from '../../types/UserRole.enum';
// import { Matches } from 'class-validator';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  // @Matches(/^(?=.*?[A-Z])/)
  password: string;

  @Column({ default: UserRoleEnum.MEMBER })
  role: UserRoleEnum;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  setPassword(password: string) {
    const salt = bcrypt.genSaltSync(5);
    this.password = bcrypt.hashSync(password || this.password, salt);
  }
}
