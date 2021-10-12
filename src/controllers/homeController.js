const express = require('express');
const dbCubes = require('../services/cubeService');
const router = express.Router();

router.get('/', (req, res) => {
    dbCubes.getAllCubes()
        .then((cubes) => {
            res.render('index', { title: 'Home', ctx: cubes });
        })
});

router.get('/search', async (req, res) => {
    let name = req.query.search;
    let from = req.query.from;
    let to = req.query.to;
    let filtredCubes = dbCubes.filterCubes(name, from, to);
    res.render('index', { title: 'Home', ctx: filtredCubes });
})

module.exports = router;
