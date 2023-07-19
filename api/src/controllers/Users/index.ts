import { log } from 'console';
import { getAllUser, create } from '../../services/user';
import { Request, Response } from 'express';
import { UserAttributes } from "../../lib/database/models/User";

export const allUsers = async (req: Request, res:Response) => {
  try {
    const response = await getAllUser();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error)
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
