const express = require('express');
const cubes = require('../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', ctx: cubes.getAllCubes() });
});

router.post('/', (req, res) => {
    let name = req.body.search;
    let from = req.body.from;
    let to = req.body.to;
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
