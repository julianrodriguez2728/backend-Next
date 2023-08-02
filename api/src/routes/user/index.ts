import { Router } from 'express';
import { allUsers,  postUser, putUser} from '../../controllers/Users/index';

const userRouter: Router = Router();

userRouter.get('/all', allUsers);
// userRouter.get('/:id', oneUser);
userRouter.put('/productUser', putUser);
userRouter.post('/', postUser);
export default userRouter;
