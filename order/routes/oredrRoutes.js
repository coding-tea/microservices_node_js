const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.index);
router.get('/add', orderController.add);

module.exports = router;