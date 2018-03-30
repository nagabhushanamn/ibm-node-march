
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    price: { type: Number, default: 0.0 },
    descrition: { type: String },
    image: { type: String, default: '' }
});

const Product = mongoose.model('Product',ProductSchema,'Product');

module.exports = Product;