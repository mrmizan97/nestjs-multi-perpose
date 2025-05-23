import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

export class Profile{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    bio: string;

    @OneToOne(()=>User,(user)=>user.profile))
    @JoinColumn()
    user:User


}