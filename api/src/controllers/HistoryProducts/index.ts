import { Request, Response } from 'express';
import {
  findAll,
  deletedById,
  productPost,
} from '../../services/historyShop/index';

interface productId {
  id: number;
}

interface postProductId {
  id: number[];
}

export const getAllProducts = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const response = await findAll(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const deletedProductById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const idProduct: productId = req.body;
  try {
    const response = await deletedById(id, idProduct);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const postProduct = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const productId: postProductId = req.body;
  try {
    const response = await productPost(id, productId);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
