const express = require('express');
const dbCubes = require('../../services/cubeService');
const router = express.Router({ mergeParams: true });

router.get('/details', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => res.render('details', { title: 'Details', cube }));
});

router.get('/add-accessory', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => res.render('attachAccessory', { title: 'Cube Accessory\'s', cube }));
});

module.exports = router;
