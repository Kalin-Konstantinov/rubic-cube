const express = require('express');
const router = express.Router();
const accessory = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory'})
});

router.post('/create', (req, res) => {
    accessory.addAccessory(req.body)
        .then(x => {
            res.redirect('/')
        })
});


module.exports = router;