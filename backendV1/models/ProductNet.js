const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Decimal,
        required: true
    },
    quantity: {
        type: Int,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Rating: {
        type: Decimal
    },
});

module.exports = mongoose.model('Product', ProductSchema);