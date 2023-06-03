const mongoose = require('mongoose');

const Order = mongoose.model('order', {
    date : {
        type : Date,
        default : new date()
    },
    products : Array,
    total : Number
});

module.exports = Order;