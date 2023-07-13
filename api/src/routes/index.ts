import { Router } from 'express';
import { getProductById, getProducts } from '../controllers/Products';

const router = Router();

router.get("/products", getProducts )
router.get("/product/:id", getProductById)
export{router}