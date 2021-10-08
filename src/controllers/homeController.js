const express = require('express');
const dbCubes = require('../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    dbCubes.getAllCubes().lean()
        .then((cubes) => {
            res.render('index', { title: 'Home', ctx: cubes });
        })
});

router.get('/search', (req, res) => {
    dbCubes.getAllCubes().lean()
        .then((cubes) => {
            let name = req.query.search;
            let from = req.query.from;
            let to = req.query.to;
            let filtredCubes = cubes;
            if (name) {
                filtredCubes = filtredCubes.filter(x => x.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
            }
            if (from) {
                filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) >= Number(from))
            }
            if (to) {
                filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) <= Number(to))
            }
            res.render('index', { title: 'Home', ctx: filtredCubes });
        })
})

module.exports = router;
