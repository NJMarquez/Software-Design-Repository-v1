const jwt = require('jsonwebtoken');
const Admin = require('../../models/AdminNew')
const Customer = require('../../models/CustomerNew')

exports.isAuthCustomer = async (req, res, next) => {
    if(req.headers && req.headers.authorization)
    {
        const token = req.headers.authorization.split(' ')[1]
        
        try 
        {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Customer.findById(decode.userId);
        if(!user) {
            return res.json({success: false, message: 'Unathorized access.'})
        }

        req.user = user;
        next();
        } 

        catch (error) 
        {
            if(error.name === 'JsonWebTokenError'){
                return res.json({success: false, message: 'Unathorized access.'});
            }

            if(error.name === 'TokenExpiredError'){
                return res.json({success: false, message: 'Session Expired.'});
            }

            res.json({success: false, message: 'Internal Server Error.'});
        }
        
    }
    else
    {
        res.json({success: false, message: 'Unathorized access.'})
    }
};
exports.isAuthAdmin = async (req, res, next) => {
    if(req.headers && req.headers.authorization)
    {
        const token = req.headers.authorization.split(' ')[1]
        
        try 
        {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Admin.findById(decode.userId);
        if(!user) {
            return res.json({success: false, message: 'Unathorized access.'})
        }

        req.user = user;
        next();
        } 

        catch (error) 
        {
            if(error.name === 'JsonWebTokenError'){
                return res.json({success: false, message: 'Unathorized access.'});
            }

            if(error.name === 'TokenExpiredError'){
                return res.json({success: false, message: 'Session Expired.'});
            }

            res.json({success: false, message: 'Internal Server Error.'});
        }
        
    }
    else
    {
        res.json({success: false, message: 'Unathorized access.'})
    }
};