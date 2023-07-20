import { Router } from 'express';
import userRouter from './user';
import productRouter from './Products/index';
import historyRouter from './historyShop/index';
const router: Router = Router();

router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/history', historyRouter);
export default router;
