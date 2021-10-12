const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeControllers/router');
const aboutController = require('./controllers/aboutController');
const accessoryController = require('./controllers/accessoryController');
const notFoundController = require('./controllers/404Controller');
const userController = require('./controllers/authController');

router.use('/home', homeController);
router.use('/cube', cubeController);
router.use('/about', aboutController);
router.use('/accessory', accessoryController);
router.use('/user', userController);
router.use('/', homeController);
router.use(notFoundController);

module.exports = router;
