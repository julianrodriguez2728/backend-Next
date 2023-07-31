import { Request, Response } from 'express';
import {
  createProductsDataBase,
  findAll,
  findById,
} from '../../services/Product';
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    createProductsDataBase();
    const response = await findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const response = await findById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error });
  }
};

export const createProducts = async (req: Request, res: Response) => {
  try {
    const response = await createProductsDataBase();

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
