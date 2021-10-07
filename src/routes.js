const express = require('express');
const router = express.Router();

const home = require('./controllers/homeController');
const cubeController = require('./controllers/cubeControllers/cubeController');
const about = require('./controllers/aboutController');
const accessory = require('./controllers/accessoryController');
const notFound = require('./controllers/404Controller');

router.use('/home', home);
router.use('/cube', cubeController);
router.use('/about', about);
router.use('/accessory', accessory);
router.use('/', home);
router.use(notFound);

module.exports = router;
