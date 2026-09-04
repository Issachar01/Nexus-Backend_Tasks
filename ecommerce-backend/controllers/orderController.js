// controllers/orderController.js
import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

export const createOrder = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Cart is empty or not found" });
        }

        let totalAmount = 0;
        const orderItems = [];

        for (const item of cart.items) {
            if (!item.product) {
                continue;
            }
            const itemTotal = item.product.price * item.quantity;
            totalAmount += itemTotal;
            orderItems.push({
                product: item.product._id,
                quantity: item.quantity,
                price: item.product.price
            });
        }

        if (orderItems.length === 0) {
            return res.status(400).json({ message: "Cart contains no valid products" });
        }

        const order = await Order.create({
            user: userId,
            items: orderItems,
            totalAmount
        });

        cart.items = [];
        await cart.save();

        res.status(201).json({
            message: "Order created successfully",
            order
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;

        const orders = await Order.find({ user: userId }).populate('items.product');
        res.status(200).json({ orders });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};