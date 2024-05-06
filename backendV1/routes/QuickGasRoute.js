const express  = require('express');
const router = express.Router();

const { createAdmin, adminSignIn, getAdminData, updateAdminProfile } = require('../controllers/AdminController');
const { createCustomer, customerSignIn, getCustomerData, updateCustomerProfile } = require('../controllers/CustomerController');
const { } = require('../controllers/ProductController');
const { } = require('../controllers/OrderController');

//const { sendVerificationCode, verifyCode, resetPassword } = require('../controllers/ForgotPasswordController');

const { validateAdminSignUp, validateCustomerSignUp, userValidation, validateUserSignIn, validatePassReset } = require('../middleware/validation/users');
const { isAuthAdmin, isAuthCustomer } = require('../middleware/validation/auth');
const { } = require('../middleware/validation/order');
const { } = require('../middleware/validation/product');

router.post('/create-customer', validateCustomerSignUp, createCustomer);
router.post('/create-admin', validateAdminSignUp, createAdmin);

router.post('/customer-sign-in', validateUserSignIn, userValidation, customerSignIn);
router.post('/admin-sign-in', validateUserSignIn, userValidation, adminSignIn);

router.get('/customer-data', isAuthCustomer, getCustomerData); 
router.get('/admin-data', isAuthAdmin, getAdminData); 

router.post('/create-post-customer', isAuthCustomer, (req, res) => {
    res.send('Token Authentication path');
});
router.post('/create-post-admin', isAuthAdmin, (req, res) => {
    res.send('Token Authentication path');
});

router.patch('/update-customer', isAuthCustomer, updateCustomerProfile);
router.patch('/update-admin', isAuthAdmin, updateAdminProfile);

/*
router.post('/send-code', sendVerificationCode);
router.post('/verify-code', verifyCode);
router.patch('/reset-password', resetPassword);
*/

module.exports = router;
