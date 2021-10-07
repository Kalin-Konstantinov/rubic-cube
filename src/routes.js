const express = require('express');
const router = express.Router();

const home = require('./controllers/homeController');
const create = require('./controllers/createCubeController');
const about = require('./controllers/aboutController');
const details = require('./controllers/detailsController');
const accessory = require('./controllers/accessoryController');
const notFound = require('./controllers/404Controller');

router.use('/home', home);
router.use('/cube', create);
router.use('/about', about);
router.use('/details', details);
router.use('/accessory', accessory);
router.use('/', home);
router.use(notFound);

module.exports = router;
