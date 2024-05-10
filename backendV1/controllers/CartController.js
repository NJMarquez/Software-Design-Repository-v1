const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        let cart = req.cart;
        const index = cart.items.findIndex(item => item.product.equals(productId));
        if (index !== -1) {
            cart.items[index].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity: quantity });
        }
        await cart.save();
        res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.removeFromCart = async (req, res) => {
    const { itemId } = req.params;
    try {
        let cart = req.cart;
        cart.items = cart.items.filter(item => !item._id.equals(itemId));
        await cart.save();
        res.status(200).json({ message: 'Item removed from cart successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateCartItem = async (req, res) => {
    const { itemId } = req.params;
    const { quantity } = req.body;
    try {
        let cart = req.cart;
        const index = cart.items.findIndex(item => item._id.equals(itemId));
        if (index !== -1) {
            cart.items[index].quantity = quantity;
            await cart.save();
            res.status(200).json({ message: 'Cart item updated successfully' });
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getCartContents = async (req, res) => {
    try {
        const cart = req.cart;
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};
