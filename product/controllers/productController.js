const Product = require('../models/Product');
const amqp = require('amqplib/callback_api');

module.exports = {
    index : (req, res) => {
        Product.find()-then((data) => {
            res.status(200).json({
                success : true,
                data : data
            });
        }).catch(err => {
            res.status(400).json({
                success : false,
                data : null,
                message : err
            })
        })
    },

    getPrice : (req, res) => {
        Product.findById(req.params.id).then((product) => {
            res.status(200).json({
                success : true,
                price : product.price
            });
        }).catch(err => {
            res.status(400).json({
                success : false,
                price : null,
                message : err
            })
        })
    },

    add : (req, res) => {
        const produit = new Product(req.body);
        produit.save().then(() => {
            res.status(200).json({
                success : true,
                data : produit
            });
        }).catch((err) => {
            res.status(400).json({
                success : false,
                data : null,
                message : err
            });
        })
    },

    destroy : (req, res) => {
        Product.findByIdAndDelete(req.params.id).then((product) => {
            res.status(200).json({
                success : true,
                data : product
            });
        }).catch(err => {
            res.status(400).json({
                success : false,
                data : null,
                message : err
            });
        });
    },

    update_price : (req, res) => {
        Product.findById(product => {
            product.price = req.body.price
            product.save().then(() => {
                res.status(200).json({
                    success : product,
                    data : null
                });
            }).catch(err => {
                res.status(400).json({
                    success : false,
                    data : null,
                    message : err
                });
            });
        }).catch(err => {
            res.status(400).json({
                success : false,
                data : null,
                message : err
            });
        });
    },

    AMQResponse : (req, res) => {
        //
    }
};