//! rutas de users
import { Router } from 'express';
import {
  allUsers,
  oneUser,
  postUser,
  logUser,
} from '../../controllers/Users/index';
import { Request, Response } from 'express';

const userRouter: Router = Router();

userRouter.post('/', postUser);
userRouter.get('/all', allUsers);
userRouter.get('/:id', oneUser);
userRouter.post('/login', logUser);

export default userRouter;
