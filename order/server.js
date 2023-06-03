const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const connect = require('./database/db');
require('dotenv').config();
connect(process.env.MONGO_URL);

const orderRoutes = require('./routes/oredrRoutes');
app.use('/order', orderRoutes);

app.listen('5000', () => console.log('server is up..'));