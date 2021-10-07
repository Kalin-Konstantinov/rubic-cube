const router = require('express').Router();
const createController = require('./createCubeController');
const detailsController = require('./detailsCubeController');

router.use('/create', createController);
router.use('/:id', detailsController);

module.exports = router;