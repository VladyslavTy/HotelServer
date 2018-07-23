const Booking = require('../models/Booking');

class BookingController {
    find () {
        return Booking.find()
    }
    create(booking) {
        return Booking.create(booking)
    }
    findById(id){
        return Booking.findById(id)
    }

    removeById(id){
        return Booking.findByIdAndRemove(id)
    }

    updateById(id, booking){
        Booking.findByIdAndUpdate(id, booking, {new: true})
    }
};

module.exports = new BookingController();