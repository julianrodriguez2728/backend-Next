import axios from 'axios';
import { Product, ProductModel } from '../../lib/database/models/Product';

export const createProductsDataBase = async () => {
  try {
    const resp = await axios.get('https://apinext-98lb.vercel.app');

    await resp.data.forEach((item: ProductModel) => {
      Product.findOrCreate({
        where: {
          name: item.name,
          image: item.image,
          stock: item.stock,
          price: item.price,
          description: item.description,
          color: item.color,
          brand: item.brand,
          category: item.category,
        },
      });
    });
    const allProducts = await Product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
};

export const findAll = async () => {
  try {
    const allProducts = await Product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
};

export const findById = async (id: number) => {
  if (id) {
    const response = await Product.findByPk(id);
    if (response) return response;
  }
  return 'Request to api by id failed';
};
