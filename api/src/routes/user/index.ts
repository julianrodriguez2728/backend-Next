//! rutas de users
import { Router } from 'express';
import { allUsers, oneUser } from '../../controllers/Users/index';
const userRouter = Router();

userRouter.get('/', allUsers);
userRouter.get('/:id', oneUser)

export default userRouter;
