import { Router } from 'express';
import { allUsers, oneUser, postUser } from '../../controllers/Users/index';

const userRouter: Router = Router();

userRouter.post('/', postUser);
userRouter.get('/all', allUsers);
userRouter.get('/:id', oneUser);

export default userRouter;
