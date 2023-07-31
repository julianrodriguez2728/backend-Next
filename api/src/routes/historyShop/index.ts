//!  Routas de history push
import Router from 'express';
import {
  getAllProducts,
  deletedProductById,
  postProduct,
} from '../../controllers/HistoryProducts/index';
const historyRouter = Router();

historyRouter.get('/:id', getAllProducts);
historyRouter.delete('/:id', deletedProductById);
historyRouter.post('/create/:id', postProduct); //! Solo para cargar la BDD

export default historyRouter;
