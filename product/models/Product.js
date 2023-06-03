const mongoose = require('mongoose');

const Product = mongoose.model('product', {
    name : String,
    marque : String,
    price : Number
});

module.exports = Product;