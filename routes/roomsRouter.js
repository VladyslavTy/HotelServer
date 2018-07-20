const express = require('express');
const router = express.Router();

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

module.exports = router;