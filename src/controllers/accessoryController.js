const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add accessory page')
})

module.exports = router;