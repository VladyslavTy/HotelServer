const Client = require('../models/Client');

class ClientController {
    find() {
        return Client.find();
    }
    create(client) {
        return Client.create(client);
    }
    findById(id){
        return Client.findById(id);
    }

    removeById(id){
        return Client.findByIdAndRemove(id);
    }

    updateById(id, client){
        Client.findByIdAndUpdate(id, client, {new: true});
    }
}

module.exports = new ClientController();