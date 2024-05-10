const jwt = require('jsonwebtoken');
const Cart = require('../models/Cart');

exports.verifyCustomer = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.customerId = decoded.customerId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

exports.loadCart = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ customer: req.customerId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        req.cart = cart;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
