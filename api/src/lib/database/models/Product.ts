//! MODELO DE Product

import { User } from './User';
import {
  Model,
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';

export interface ProductModel {
  id: number;
  image: string[];
  price: number;
  name: string;
  description: string;
  color: string;
  brand: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
@Table({
  timestamps: true,
  tableName: 'Product',
  freezeTableName: true,
  modelName: 'Product',
})
export class Product extends Model<ProductModel> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: false,
  })
  price!: number;

  @Column({
    allowNull: false,
  })
  name!: string;

  @Column({
    allowNull: false,
  })
  category!: string;

  @Column({
    allowNull: true,
    defaultValue: '',
    type:DataType.ARRAY(DataType.STRING)
  })
  image!: string[];

  @Column({
    allowNull: true,
    type: DataType.TEXT,
  })
  description!: string;

  @Column({
    allowNull: false,
  })
  color!: string;

  @Column({
    allowNull: false,
  })
  brand!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @ForeignKey(() => User)
  @Column
  productId!: number;

  @BelongsTo(() => User)
  user!: User;
}
