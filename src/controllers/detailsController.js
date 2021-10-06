const express = require('express');
const dbCubes = require('../services/cubeService');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => res.render('details', { title: 'Details', ctx: cube }));
});

module.exports = router;
