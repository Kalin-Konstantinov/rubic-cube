const express = require('express');
const allCubes = require('../db/dbCubes');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const cube = allCubes.filter(x => x.id == id);
    res.render('details', { title: 'Details', ctx: cube[0] });
});

module.exports = router;
