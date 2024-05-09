const express  = require('express');
const router = express.Router();

const { createAdmin, adminSignIn, getAdminData, updateAdminProfile } = require('../controllers/AdminController');
const { createCustomer, customerSignIn, getCustomerData, updateCustomerProfile } = require('../controllers/CustomerController');
const { createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/ProductController');
const { createOrder, getOrder, updateOrder, deleteOrder} = require('../controllers/OrderController');

//const { sendVerificationCode, verifyCode, resetPassword } = require('../controllers/ForgotPasswordController');

const { validateAdminSignUp, validateCustomerSignUp, userValidation, validateUserSignIn, validatePassReset } = require('../middleware/validation/users');
const { isAuthAdmin, isAuthCustomer } = require('../middleware/validation/auth');
const { validateOrder, validateOrderMiddleware } = require('../middleware/validation/order');
const { validateProduct, validateProductMiddleware } = require('../middleware/validation/product');

router.post('/create-customer', validateCustomerSignUp, createCustomer);
router.post('/create-admin', validateAdminSignUp, createAdmin);

router.post('/customer-sign-in', validateUserSignIn, userValidation, customerSignIn);
router.post('/admin-sign-in', validateUserSignIn, userValidation, adminSignIn);

router.post('/add-order', createOrder, validateOrder, validateOrderMiddleware);

router.post('/add-product', createProduct, validateProduct, validateProductMiddleware);

router.get('/customer-data', isAuthCustomer, getCustomerData); 
router.get('/admin-data', isAuthAdmin, getAdminData); 

router.get('/order-data', isAuthAdmin, isAuthCustomer, getOrder); 
router.get('/product-data', isAuthCustomer, isAuthAdmin, getProduct); 

router.post('/create-post-customer', isAuthCustomer, (req, res) => {
    res.send('Token Authentication path');
});
router.post('/create-post-admin', isAuthAdmin, (req, res) => {
    res.send('Token Authentication path');
});

router.patch('/update-customer', isAuthCustomer, updateCustomerProfile);
router.patch('/update-admin', isAuthAdmin, updateAdminProfile);

router.patch('/update-order', isAuthAdmin, isAuthCustomer, updateOrder);
router.patch('/update-product', isAuthAdmin, isAuthCustomer, updateProduct);

router.delete('/delete-order', isAuthAdmin, isAuthCustomer, deleteOrder);
router.delete('/delete-product', isAuthAdmin, isAuthCustomer, deleteProduct);

/*
router.post('/send-code', sendVerificationCode);
router.post('/verify-code', verifyCode);
router.patch('/reset-password', resetPassword);
*/

module.exports = router;
