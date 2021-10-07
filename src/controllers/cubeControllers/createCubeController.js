const express = require('express');
const dbCubes = require('../../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube' });
});

router.post('/', (req, res) => {
    dbCubes.addCube(req.body)
        .then(cube => {
            res.redirect('/');
        })

});

module.exports = router;
