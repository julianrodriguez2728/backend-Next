//! rutas de users
import { Router } from 'express';
import { allUsers } from '../../controllers/Users/index';
const userRouter = Router();

userRouter.get('/', allUsers);

export default userRouter;
