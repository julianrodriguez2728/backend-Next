import { Router } from 'express';
import userRouter from './user';
import productsRouter from '../controllers/Products';

const router: Router = Router();

router.use('/user', userRouter);
router.use('/products', productsRouter);

export default router;
