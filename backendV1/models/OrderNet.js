const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
      },
      products: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
      ],
      status: String,
    
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ref_no: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Order', OrderSchema);