const express = require('express');
const allCubes = require('../db/dbCubes');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home', ctx: allCubes });
});

module.exports = router;
