const express = require('express');
const router = express.Router();

const home = require('./controllers/homeController');
const create = require('./controllers/createController');
const about = require('./controllers/aboutController');
const details = require('./controllers/detailsController');

router.use('/', home);
router.use('/create', create);
router.use('/about', about);
router.use('/details', details);

module.exports = router;
