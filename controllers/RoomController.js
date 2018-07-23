const Room = require('../models/Room');

class RoomController {
    find () {
        return Room.find();
    }
    create(room) {
        return Room.create(room);
    }
    findById(id){
        return Room.findById(id);
    }

    removeById(id){
        return Room.findByIdAndRemove(id);
    }

    updateById(id, room){
        Room.findByIdAndUpdate(id, room, {new: true});
    }
}

module.exports = new RoomController();