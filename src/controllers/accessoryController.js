const express = require('express');
const router = express.Router();
const accessory = require('../services/accessoryService');
const { extractMongoErrorMessage } = require('../utility/mongoDBErrorMessageExtractor');

router.get('/create', (req, res) => {
    res.render('createAccessory', { title: 'Create Accessory' })
});

router.post('/create', (req, res) => {
    accessory.addAccessory(req.body)
        .then(x => {
            res.redirect('/')
        })
        .catch(err => {
            const mongoErrorMessage = extractMongoErrorMessage(err);
            res.render('createAccessory', { error: { message: mongoErrorMessage }, title: 'Create Accessory' })
        })
});


module.exports = router;