const express = require('express');
const dbCubes = require('../services/cubeService');
const router = express.Router();

router.get('/create-page', (req, res) => {
    res.render('create', { title: 'Create Cube' });
});

router.post('/create', (req, res) => {
    dbCubes.addCube(req.body)
        .then(cube => {
            res.redirect('/');
        })

});

module.exports = router;
