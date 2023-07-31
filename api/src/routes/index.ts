import { Router } from 'express';
import userRouter from './user';
import productRouter from './Products/index';
import historyRouter from './historyShop/index';
import { paymentController } from '../controllers/Products/paymentsController';
const router: Router = Router();

router.use('/user', userRouter);
router.use('/products', productRouter);
router.use('/history', historyRouter);
router.use('/create-checkout-session', paymentController)
export default router;
