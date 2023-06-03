const mongoose = require('mongoose');

const Order = mongoose.model('order', {
    date : {
        type : Date,
        default : Date.now()
    },
    products : Array,
    total : Number
});

module.exports = Order;