const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.index);
router.post('/add', productController.add);
router.delete('/delete/:id', productController.destroy);
router.get('/price/:id', productController.getPrice);
router.post('/update/:id', productController.update_price);
router.get('/amqp', productController.AMQResponse);

module.exports = router;