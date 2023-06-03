const Order = require('../models/Order');
const amqplib = require('amqplib/callback_api');

module.exports = {
    index : (req, res) => {
        Order.find().then((orders) => {
            res.status(200).json({
                success : true,
                data : orders
            });
        }).catch(err =>{
            res.status(400).json({
                success : false,
                data : null
            });
        });
    },

    add : (req, res) =>{
        var orders_id_to_save = ['1', '2', '3', '4'];
        var orders_id = orders_id_to_save.join('-');
        amqplib.connect('amqp://localhost', (err, connection) => {
            if(err) throw err;
            connection.createChannel((err, channel) => {
                if(err) throw err;
                channel.assertQueue('product', {durable:false});
                channel.sendToQueue('product', Buffer.from(orders_id));
                console.Console('orders_id se')
            });
            connection.createChannel((err, channel) => {
                if(err) throw err;
                channel.assertQueue('order', {durable : false});
                channel.consume('order', msg => {
                    var total = msg.content.toString();
                    var new_order = new Order({
                        products : orders_id_to_save,
                        total : total
                    });
                    new_order.save().then(() => {
                        res.status(200).json({
                            success : true,
                            data : new_order
                        });
                    }).catch(err => {
                        res.status(404).json({
                            success : false,
                            data : null,
                            message : err
                        });
                    });
                });
            });
            setTimeout(() => {
                connection.close();
            }, 1000);
        });
    }

};