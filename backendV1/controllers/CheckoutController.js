const Cart = require('../models/Cart');
const Order = require('../models/OrderNet');

exports.checkoutCart = async (req, res) => {
  try {
    // Get the cart items for the current customer
    const cart = await Cart.findOne({ customer: req.user._id }).populate('items.product');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty' });
    }

    // Create an order with the cart items
    const order = new Order({
      customer: req.user._id,
      products: cart.items.map(item => item.product),
      status: 'Pending', // Set initial status to 'Pending' or any other appropriate value
      date: new Date(),
      ref_no: generateReferenceNumber() // You can define your own function for generating reference numbers
    });

    // Save the order
    await order.save();

    // Clear the cart items
    cart.items = [];
    await cart.save();

    return res.status(200).json({ success: true, message: 'Cart checked out successfully', order });
  } catch (error) {
    console.error('Error checking out cart:', error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

function generateReferenceNumber() {
  // Define your own logic for generating reference numbers here
  return Math.floor(100000 + Math.random() * 900000);
}
