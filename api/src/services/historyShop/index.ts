import { Identifier, __String } from 'typescript';
import { Product } from '../../lib/database/models/Product';
import { User } from '../../lib/database/models/User';
import axios from 'axios';

interface InterfaceProduct {
  id: number;
  image: string;
  price: number;
  name: string;
  description: string;
  category: string;
  color: string;
  brand: string;
  createdAt: Date;
  updatedAt: Date;
}

interface productId {
  id: number;
}

export const findAll = async (id: number) => {
  let arrayDeProducts: InterfaceProduct[] = [];

  const allProducts = await User.findByPk(id, { include: [Product] });

  if (!allProducts) return 'This user does not exist';

  if (allProducts?.Products.length === 0) return 'This user has no products';

  allProducts?.Products.map((item) => arrayDeProducts.push(item));

  return arrayDeProducts;
};

export const deletedById = async (id: number, productId: number) => {
  const response = await findAll(id);
};

export const productPost = async (id: number, productId: productId) => {
  const oneUser = await User.findByPk(id, { include: [Product] });
  const oneProduct: InterfaceProduct | any = await Product.findByPk(
    productId.id
  );
  oneUser?.Products.filter((product) => {
    product.id === productId.id;
    return 'This product already exists';
  });
  oneUser?.$add('Product', oneProduct);

  return oneProduct;
};
