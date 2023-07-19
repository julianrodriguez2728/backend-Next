//! MODELO DE Product 

import { User } from "./User";
import { Model, Column, Table, CreatedAt, UpdatedAt, BelongsTo, ForeignKey } from "sequelize-typescript";

interface ProductModel {
    id: number,
    amount: number,
    name: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
}
@Table({
    timestamps: true,
    tableName:"Product",
    freezeTableName: true,
    modelName:"Product",
})
export class Product extends Model<ProductModel> {
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