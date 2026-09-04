// routes/orderRouter.js
import express from 'express';
import { createOrder, getUserOrders } from '../controllers/orderController.js';
import { authLogin } from '../middleware/authMiddleware.js';

const orderRouter = express.Router();

orderRouter.route('/').post(authLogin, createOrder);
orderRouter.route('/:userId').get(authLogin, getUserOrders);

export default orderRouter;