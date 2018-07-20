const mongoose = require('mongoose');
const ClientSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phone: {type: String,required: true},
    odate: {type: Date, default: Date.now}
});

const Client = mongoose.model('Client', ClientSchema, 'clients');

module.exports = Client;