const jwt = require('jsonwebtoken');
const Customer = require('../models/CustomerNew');

exports.createCustomer = async (req, res) => {
    try {
        console.log('Received data in createCustomer:', req.body);

        const { email, username, password, fullname, contactNumber } = req.body;

        // Check if the email is already in use
        const isNewCustomer = await Customer.isThisEmailInUse(email);

        if (!isNewCustomer) {
            return res.json({
                success: false,
                message: 'This email is already in use, try logging in.',
            });
        }

        // Create a new customer with all required fields
        const customer = new Customer({
            email,
            username,
            password,
            fullname,
            contactNumber,
            address,
        });

        // Save the customer to the database
        await customer.save();

        console.log('Customer created successfully:', customer);

        res.json({ success: true, customer });
    } catch (error) {
        console.error('Error creating customer account:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
};

exports.customerSignIn = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the customer based on the username or email
        const customer = await Customer.findOne({ $or: [{ username }, { email: username }] });

        // Check if the customer exists
        if (!customer) {
            return res.json({ success: false, message: 'Username not found.' });
        }

        // Check if the password is correct
        const isMatch = await customer.comparePassword(password);
        if (!isMatch) {
            return res.json({ success: false, message: 'Username/Password is incorrect.' });
        }

        // Generate and send a token if the login is successful
        const token = jwt.sign({ customerId: customer._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ success: true, customer, token });
    } catch (error) {
        console.error('Error during customer login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.getCustomerData = async (req, res) => {
    try {
        // Get customer data from the authenticated customer
        const customer = req.customer;

        // Construct the response object
        const response = {
            success: true,
            customer: {
                email: customer.email,
                username: customer.username,
                fullname: customer.fullname,
                contactNumber: customer.contactNumber,
                address: customer.address,
            },
        };
        res.json(response);
    } catch (error) {
        console.error('Error getting customer data:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.updateCustomerProfile = async (req, res) => {
    try {
        // Get customer data from the authenticated customer
        const customer = req.customer;

        // Update the customer profile with the new data
        customer.fullname = req.body.fullname || customer.fullname;
        customer.contactNumber = req.body.contactNumber || customer.contactNumber;
        customer.address = req.body.address || customer.address;

        // Save the updated customer profile
        await customer.save();

        // Construct the response object
        const response = {
            success: true,
            message: 'Customer profile updated successfully.',
            customer: {
                email: customer.email,
                username: customer.username,
                fullname: customer.fullname,
                contactNumber: customer.contactNumber,
                address: customer.address,
            },
        };

        res.json(response);
    } catch (error) {
        console.error('Error updating customer profile:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

