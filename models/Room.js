const mongoose = require('mongoose');
const RoomSchema = mongoose.Schema({
    number: {type: Number, required: true},
    size: {type: String, required: true},
    category: {type: String, required: true},
});

const Room = mongoose.model('Room', RoomSchema, 'rooms');

module.exports = Room;