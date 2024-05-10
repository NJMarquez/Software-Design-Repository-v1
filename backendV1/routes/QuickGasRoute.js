const express  = require('express');
const router = express.Router();

const { createAdmin, adminSignIn, getAdminData, updateAdminProfile } = require('../controllers/AdminController');
const { createCustomer, customerSignIn, getCustomerData, updateCustomerProfile } = require('../controllers/CustomerController');
const { createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/ProductController');
const { createOrder, getOrder, updateOrder, deleteOrder, getAdminOrders, getCustomerOrders} = require('../controllers/OrderController');
const { addToCart, removeFromCart, getCartContents, updateCartItem } = require('../controllers/CartController');

//const { sendVerificationCode, verifyCode, resetPassword } = require('../controllers/ForgotPasswordController');

const { validateAdminSignUp, validateCustomerSignUp, userValidation, validateUserSignIn, validatePassReset } = require('../middleware/validation/users');
const { isAuthAdmin, isAuthCustomer } = require('../middleware/validation/auth');
const { validateOrder, validateOrderMiddleware } = require('../middleware/validation/order');
const { validateProduct, validateProductMiddleware } = require('../middleware/validation/product');
const { verifyCustomer, loadCart } = require('../middleware/cartAuth');
const { checkoutCart } = require('../controllers/CheckoutController');


router.post('/create-customer', validateCustomerSignUp, createCustomer);
router.post('/create-admin', validateAdminSignUp, createAdmin);

router.post('/customer-sign-in', validateUserSignIn, userValidation, customerSignIn);
router.post('/admin-sign-in', validateUserSignIn, userValidation, adminSignIn);

router.post('/add-order', createOrder, validateOrder, validateOrderMiddleware);

router.post('/add-product', createProduct, validateProduct, validateProductMiddleware);

router.get('/customer-data', isAuthCustomer, getCustomerData); 
router.get('/admin-data', isAuthAdmin, getAdminData); 

router.post('/checkout', isAuthCustomer, checkoutCart);

router.get('/order-data', isAuthAdmin, isAuthCustomer, getOrder); 
// Admin route to view all orders
router.get('/admin/orders', isAuthAdmin, getAdminOrders);
// Customer route to view their own orders
router.get('/customer/orders', isAuthCustomer, getCustomerOrders);

router.get('/product-data', isAuthCustomer, isAuthAdmin, getProduct); 

router.post('/create-post-customer', isAuthCustomer, (req, res) => {
    res.send('Token Authentication path');
});
router.post('/create-post-admin', isAuthAdmin, (req, res) => {
    res.send('Token Authentication path');
});

router.patch('/update-customer', isAuthCustomer, updateCustomerProfile);
router.patch('/update-admin', isAuthAdmin, updateAdminProfile);

router.patch('/update-order', isAuthAdmin, updateOrder);
router.patch('/update-product', isAuthAdmin, updateProduct);

router.delete('/delete-order', isAuthAdmin, deleteOrder);
router.delete('/delete-product', isAuthAdmin, deleteProduct);

router.post('/add-to-cart', verifyCustomer, loadCart, addToCart);
router.delete('/remove-from-cart/:itemId', verifyCustomer, loadCart, removeFromCart);
router.patch('/update-cart-item/:itemId', verifyCustomer, loadCart, updateCartItem);
router.get('/cart-contents', verifyCustomer, loadCart, getCartContents);

/*
router.post('/send-code', sendVerificationCode);
router.post('/verify-code', verifyCode);
router.patch('/reset-password', resetPassword);
*/

module.exports = router;
