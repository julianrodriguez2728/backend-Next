import { Router } from 'express';
import { allUsers, oneUser, postUser } from '../../controllers/Users/index';

const userRouter: Router = Router();

userRouter.get('/all', allUsers);
userRouter.get('/:id', oneUser);
/* userRouter.put('/productUser', putUser); */

export default userRouter;
