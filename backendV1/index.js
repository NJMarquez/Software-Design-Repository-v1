const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./models/db');
const Router = require('./routes/QuickGasRoute');
const app = express();
const port = 8000;

// Middleware to log and include the IP address in the response
app.use((req, res, next) => {
    const ipAddress = req.ip;
    console.log(`Request from IP: ${ipAddress}`);
    res.locals.ipAddress = ipAddress;
    next();
  });
  
  // Route to return the IP address
  app.get('/ip', (req, res) => {
    res.json({ ipAddress: res.locals.ipAddress });
  });
  
  // Other routes and middleware
  app.use(bodyParser.json());
  app.use(cors({
    origin: '*', // Replace with another frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  app.use(express.json());
  app.use(Router);
  
  app.get('/', (req, res) => {
    res.json({ success: true, message: 'Welcome to the backend' });
  });
  
app.listen(port, () => {
    console.log('Port is listening.')
})

