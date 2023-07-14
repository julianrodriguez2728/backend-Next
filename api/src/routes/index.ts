
import { Router } from 'express';
import { getProductById, getProducts } from '../controllers/Products';
import userRouter from './user';

const router = Router();

router.use('/user', userRouter);
// router.use('/product', productRouter);

export default router;
