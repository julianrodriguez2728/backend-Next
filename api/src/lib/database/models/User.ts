//! MODELO DE USERS
import { Column, Table, Model, HasMany } from 'sequelize-typescript';
import { Product } from './Product';

export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}
@Table({
  timestamps: true,
  tableName: 'Users',
  freezeTableName: true,
  modelName: 'Users',
})
export class User extends Model<UserAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    allowNull: false,
  })
  name!: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    defaultValue:
      'https://i.scdn.co/image/ab67706c0000da84508c76d25acfbf1dc9fc0282',
    allowNull: true,
  })
  picture!: string;

  @HasMany(() => Product)
  Products!: Product[];
}
