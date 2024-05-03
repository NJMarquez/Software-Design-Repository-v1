const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    ref_no: {
        type: Int,
        required: true
    },
});

module.exports = mongoose.model('Order', OrderSchema);