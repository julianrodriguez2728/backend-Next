import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProducts,
} from '../../controllers/Products';

const productRouter: Router = Router();

productRouter.get('/', getAllProducts);
productRouter.post('/create', createProducts);
productRouter.get('/:id', getProductById);

export default productRouter;
