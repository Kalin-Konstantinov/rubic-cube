const express = require('express');
const router = express.Router();

const home = require('./controllers/homeController');
const create = require('./controllers/createController');
const about = require('./controllers/aboutController');
const details = require('./controllers/detailsController');
const notFound = require('./controllers/404Controller');

router.use('/', home);
router.use('/home', home);
router.use('/create', create);
router.use('/about', about);
router.use('/details', details);
router.use(notFound);

module.exports = router;
