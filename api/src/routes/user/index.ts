import { Router } from 'express';
import {
  allUsers,
  postUser,
  putUser,
  getByEmail,
} from '../../controllers/Users/index';

const userRouter: Router = Router();

userRouter.get('/all', allUsers);
userRouter.post('/email', getByEmail);
userRouter.put('/productUser', putUser);
userRouter.post('/', postUser);
export default userRouter;
