const express = require('express');
const router = express.Router();

const Client = require('../models/Client');

router.get('/clients', function (req, res) {
    Client.find()
        .then(clients => res.json(clients))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/clients', function (req,res) {
    Client.create(req.body)
        .then(clients => res.json(clients))
        .catch(err => res.status(500).json({error: err}));

});

const Booking = require('../models/Booking');

router.get('/bookings', function (req, res) {
    Booking.find()
        .then(booking => res.json(booking))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/bookings', function (req,res) {
    Booking.create(req.body)
        .then(clients => res.json(clients))
        .catch(err => res.status(500).json({error: err}));

});

router.delete('/bookins/:id',function (req,res) {
    Booking.findByIdAndRemove(req.params.id)
        .then(m => res.status(204).json('OK'))
        .catch(err => res.status(500).json({error: err}));
});



const Room = require('../models/Room');

router.get('/rooms', function (req, res) {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(500).json({error: err}))
});

router.post('/rooms', function (req,res) {
    Room.create(req.body)
        .then(rooms => res.json(rooms))
        .catch(err => res.status(500).json({error: err}));
});

/*

router.get('/meetups/:id',function (req,res) {
    Meetup.findById(req.params.id)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));
});

router.delete('/meetups/:id',function (req,res) {
    Meetup.findByIdAndRemove(req.params.id)
        .then(m => res.status(204).json('OK'))
        .catch(err => res.status(500).json({error: err}));
});

router.patch('/meetups/:id', function (req,res) {
    Meetup.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}));
});

router.post('/:say', function (req, res) {
    let say = req.params.say;
    let {first, last} = req.body;
    let message = `${say} ${first} ${last}`;
    res.json({message});
});

*/
module.exports = router;
