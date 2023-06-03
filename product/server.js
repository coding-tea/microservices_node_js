const express = require('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const connect = require('./database/db');
require('dotenv').config();
connect(process.env.MONGO_URL);

const productRoutes = require('./routes/productRoutes');
app.use('/product', productRoutes);


app.listen('4000', () => console.log('server is up..'));
