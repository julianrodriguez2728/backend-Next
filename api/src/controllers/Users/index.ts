import { getAllUser, getOneUser, create, productBought } from '../../services/user';
import { Request, Response } from 'express';
import { UserAttributes } from '../../lib/database/models/User';
import { ProductModel } from '../../lib/database/models/Product';

interface dataLogin {
  email: string;
  password: string;
}

export const allUsers = async (req: Request, res: Response) => {
  try {
    const response = await getAllUser();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const oneUser = async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const response = await getOneUser(id);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const postUser = async (req: Request, res: Response) => {
  const user: UserAttributes = req.body;
  try {
    const response = await create(user);
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const buyProduct = async(req: Request, res: Response) => {
  const product: ProductModel = req.body

  try {
    const response = await productBought(product)
    res.status(200).send(response)
  } catch (error) {
    res.status(400).send(error)
  }

}
