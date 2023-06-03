const mongoose = require('mongoose');

const connection_db = (url) => {
    mongoose.connect(url).then(() => console.log('database connection successfuly...')).catch((err) => console.log('Error') + err);
}

module.exports = connection_db;