const express = require('express');
const dbCubes = require('../../services/cubeService');
const router = express.Router();
const { isAuth } = require('../../middlewares/authMiddlewares');

router.use(isAuth);

const renderCreatePage = (req, res) => {
    res.render('create', { title: 'Create Cube' });
}

const createCube = (req, res) => {
    dbCubes.addCube(req.body)
        .then(cube => {
            res.redirect('/');
        })

}

router.get('/', renderCreatePage);
router.post('/', createCube);

module.exports = router;
