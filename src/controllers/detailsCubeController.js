const express = require('express');
const dbCubes = require('../services/cubeService');
const router = express.Router({ mergeParams: true });

router.get('/details', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => res.render('details', { title: 'Details', cube }));
});

module.exports = router;
