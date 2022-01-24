import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({default: true})
  firstname: string;

  @Column({default: true})
  lastname: string;

  @Column({default: true})
  email: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  @Column({default: true})
  password: string;

  @Column({default: true})
  confirmpassword: string;

  @Column({default: true})
  gender: string;

  @Column({default: true})
  timestamp: string;

  @Column({default: true})
  name: string;
}