const express = require('express');
const router = express.Router();
const accessory = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('createAccessory')
});

router.post('/create', (req, res) => {
    accessory.addAccessory(req.body)
        .then(x => {
            console.log(x, '\naccessory has been added');
            res.redirect('/')
        })
});


module.exports = router;