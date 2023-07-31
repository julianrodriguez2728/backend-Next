import { Router } from 'express';
import { allUsers, oneUser, postUser } from '../../controllers/Users/index';

const userRouter: Router = Router();

userRouter.get('/all', allUsers);
userRouter.get('/all/:id', oneUser);
userRouter.post('/', postUser);

export default userRouter;
