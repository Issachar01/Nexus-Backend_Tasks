import express from 'express';
import { getCart, addToCart, removeFromCart, clearCart } from '../controllers/cartController.js';
import { authLogin } from '../middleware/authMiddleware.js';

const openRouter = express.Router();

openRouter.route('/').get(authLogin, getCart).post(authLogin, addToCart).delete(authLogin, clearCart);
openRouter.route('/:productId').delete(authLogin, removeFromCart);

export default openRouter;