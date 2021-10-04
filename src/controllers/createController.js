const express = require('express');
const cubes = require('../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube' });
});

router.post('/', (req, res) => {
    cubes.addCube(req.body);
    res.redirect('/');
});

module.exports = router;
