import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';
import { profile } from 'console';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  email: string;

  @Column({ nullable: true })
  pasword: string;

  @Column({ default: false })
  completed: boolean;

  @OneToOne(()=>Profile,(profile)=>profile.user{
    cascade:true,
    eager: true
  })
  @JoinColumn()
  profile:Profile
}
