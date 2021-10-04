const express = require('express');
const cubes = require('../db/dbCubes');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const cube = cubes.findCubeById(id);
    res.render('details', { title: 'Details', ctx: cube });
});

module.exports = router;
