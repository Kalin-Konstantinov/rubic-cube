const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.render('createAccessory')
});

router.post('/add', (req, res) => {
    let a = req.body
    console.log(a);
    res.end()
});

module.exports = router;