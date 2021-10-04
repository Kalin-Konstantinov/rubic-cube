const express = require('express');
const cubes = require('../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', ctx: cubes.getAllCubes() });
});

router.get('/search', (req, res) => {
    let name = req.query.search;
    let from = req.query.from;
    let to = req.query.to;
    let filtredCubes = cubes.getAllCubes().slice();
    if (name) {
        filtredCubes = filtredCubes.filter(x => x.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    }
    if (from) {
        filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) >= Number(from))
    }
    if (to) {
        filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) <= Number(to))
    }
    res.render('index', { title: 'Home', ctx: filtredCubes });
})

module.exports = router;
