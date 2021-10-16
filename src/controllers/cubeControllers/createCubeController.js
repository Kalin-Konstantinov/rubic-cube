const express = require('express');
const dbCubes = require('../../services/cubeService');
const router = express.Router();
const { isAuth } = require('../../middlewares/authMiddlewares');

router.use(isAuth);

const renderCreatePage = (req, res) => {
    res.render('create', { title: 'Create Cube' });
}

const createCube = (req, res) => {
    const ownerId = req.user._id;
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const difficultyLevel = req.body.difficultyLevel;
    const data = {
        ownerId,
        name,
        description,
        imageUrl,
        difficultyLevel,
    }
    dbCubes.addCube(data)
        .then(cube => {
            res.redirect('/');
        })

}

router.get('/', renderCreatePage);
router.post('/', createCube);

module.exports = router;
