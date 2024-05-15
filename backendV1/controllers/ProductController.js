const Product = require('../models/ProductNet');

exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity, description, rating } = req.body;

    // Create a new product with the provided data
    const product = new Product({
      name,
      price,
      quantity,
      description,
      rating,
    });

    // Save the product to the database
    await product.save();

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.getProduct = async (req, res) => {
  try {
    // Find all products
    const products = await Product.find();

    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, quantity, description, rating } = req.body;

    // Find the product by its ID and update its properties
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, price, quantity, description, rating },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // Find the product by its ID and delete it
    const product = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};