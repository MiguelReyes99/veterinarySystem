import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class USERS extends Model {
    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    position!: string;

    @Column
    username!: string;

    @Column
    password!: string;

    @Column
    status!: number
}