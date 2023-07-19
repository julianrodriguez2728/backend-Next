//! rutas de users
import { Router } from 'express';
import { allUsers, postUser } from '../../controllers/Users/index';
import { Request, Response } from 'express';

const userRouter: Router = Router();

userRouter.post('/', postUser);
userRouter.get('/all', allUsers);

export default userRouter;
