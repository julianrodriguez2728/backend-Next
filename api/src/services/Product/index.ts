import axios from 'axios';
import { Product } from '../../lib/database/models/Product';

interface ProductModel {
  image: string | string[];
  price: number;
  name: string;
  description: string;
  color: string;
  brand: string;
  category: string;
}

export const createProductsDataBase = async () => {
  try {
    const resp = await axios.get('https://apinext-98lb.vercel.app');

    await Promise.all(
      resp.data.map(async (item: ProductModel) => {
        // Convert image to an array of strings if it's a single string
        const imageArray = Array.isArray(item.image) ? item.image : [item.image];

        await Product.findOrCreate({
          where: {
            name: item.name,
            image: imageArray,
            price: item.price,
            description: item.description,
            color: item.color,
            brand: item.brand,
            category: item.category,
          },
        });
      })
    );

    const allProducts = await Product.findAll();
    return allProducts;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const allProducts = await Product.findAll();
    console.log(allProducts)
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
