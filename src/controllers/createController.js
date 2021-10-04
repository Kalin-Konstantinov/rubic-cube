const express = require('express');
const addCube = require('../services/createCubeSevice');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube' });
});

router.post('/', (req, res) => {
    addCube(req.body);
    res.redirect('/create');
    // console.log(req.body);
});

module.exports = router;
