import { Router } from 'express';
import userRouter from './user';
import productsRouter from '../controllers/Products';
import historyRouter from './historyShop';
import  {paymentController}  from '../controllers/Products/controllers/paymentsController';

const router: Router = Router();

router.use('/user', userRouter);

router.use('/products', productsRouter);

router.use('/create-checkout-session', paymentController )

router.use('/historyShop', historyRouter)

export default router;
