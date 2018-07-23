const express = require('express');
const router = require('./routes');
const app = express();
const mongoose = require('mongoose');


const DB_URL ='mongodb://localhost:27017/hotel';

mongoose.connect(DB_URL, { useNewUrlParser: true }, function (err) {
    if(err) {
        console.error('Mongo connection FAIL: ' + err);
    }  else {
        console.log('Mongo connection OK');
    }
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    if (req.method === 'Options') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, OPTIONS');
        return res.status(200).json({});
    } else { next(); }
});

app.use(express.json());
app.use(router);

module.exports = app;