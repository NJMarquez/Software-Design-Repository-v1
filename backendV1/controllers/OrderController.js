const Order = require('../models/OrderNet');
const Cart = require('../models/Cart');

exports.createOrder = async (req, res) => {
    try {
        // 1. Prepare order data
        const { customerId, status, ref_no } = req.body;

        // 2. Retrieve cart contents
        const cart = await Cart.findOne({ customerId }); 
        const products = cart.items.map(item => item.productId); 

        // 3. Assign cart contents to order
        const order = new Order({
            customerId,
            products,
            status,
            ref_no,
            date: new Date().toISOString(), 
        });

        await order.save();

        await Cart.findOneAndUpdate({ customerId }, { items: [] });

        res.status(200).json({ success: true, order });
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller function to get orders for admin
exports.getAdminOrders = async (req, res) => {
  try {
      // Retrieve all orders from the database
      const orders = await Order.find().populate('customerId', 'email username');
      res.json({ success: true, orders });
  } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Controller function to get orders for a customer
exports.getCustomerOrders = async (req, res) => {
  try {
      const customerId = req.customer._id;
      // Retrieve orders associated with the customer ID
      const orders = await Order.find({ customerId });
      res.json({ success: true, orders });
  } catch (error) {
      console.error('Error fetching customer orders:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Find the order by its ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Error getting order:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { date, status, ref_no } = req.body;

    // Find the order by its ID and update its properties
    const order = await Order.findByIdAndUpdate(
      orderId,
      { date, status, ref_no },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Find the order by its ID and delete it
    const order = await Order.findByIdAndDelete(orderId);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};