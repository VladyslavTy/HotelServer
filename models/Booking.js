const mongoose = require('mongoose');
const BookingSchema = mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    number: {type: Number, required: true},
    startbooking: {type: Date, required: true},
    finishbooking: {type: Date, required: true},
});

const Booking = mongoose.model('Booking', BookingSchema, 'bookings');

module.exports = Booking;