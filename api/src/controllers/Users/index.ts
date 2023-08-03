import {
  getAllUser,
  create,
  productBought,
  getUserByEmail,
} from '../../services/user';
import { Request, Response } from 'express';
import { UserAttributes } from '../../lib/database/models/User';

interface Email {
  email: string;
}

export const allUsers = async (req: Request, res: Response) => {
  try {
    const response = await getAllUser();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};

// export const oneUser = async (req: Request, res: Response) => {
//   const id: number = parseInt(req.params.id);
//   if (isNaN(id)) {
//     res.status(400).send("Invalid user ID provided.");
//     return;
//   }

//   try {
//     const response = await getOneUser(id);
//     if(!response){
//       res.status(404).send("User not found.");
//       return;
//     }
//     res.status(200).send(response);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

export const getByEmail = async (req: Request, res: Response) => {
  const email: Email = req.body;

  try {
    const response = await getUserByEmail(email);
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
    console.log(response, 'USUARIO CREADO');
  } catch (error) {
    res.status(400).send(error);
  }
};

export const putUser = async (req: Request, res: Response) => {
  try {
    const { nombre } = req.body;
    const { prod } = req.body;
    const response = await productBought(nombre, prod);

    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
};
