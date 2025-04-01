import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class USERS {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    position!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

    @Column()
    status!: number;
}
