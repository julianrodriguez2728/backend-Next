//! MODELO DE HISTORY SHOP

import { User } from "./User";
import { Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey } from "sequelize-typescript";

interface History {
    id: number,
    amount: number,
    name: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
}


@Table({
    timestamps: true,
    tableName:"Product History",
    freezeTableName: true,
    modelName:"Product History",
})
export class ProductHistory extends Model<History> {
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        allowNull: false
    })
    amount!: number

    @Column({
        allowNull: false
    })
    name!: string

    @Column({
        allowNull: true
    })
    description!: string

    @CreatedAt
    @Column
    createdAt!: Date;

    @UpdatedAt
    @Column
    updatedAt!: Date;

    @ForeignKey(() => User)
    @Column
    productId!: number
    @BelongsTo(() => User)
    user!: User
}