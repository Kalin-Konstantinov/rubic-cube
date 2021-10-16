const express = require('express');
const router = express.Router({ mergeParams: true });
const { getOneAccessory, getFilteredAccessoriesWithout } = require('../../services/accessoryService');
const dbCubes = require('../../services/cubeService');
const { isAuth, isCreator } = require('../../middlewares/authMiddlewares');

router.get('/details', async (req, res) => {
    const userId = req.user._id
    const cubeId = req.params.id;
    let cube = await dbCubes.findCubeById(cubeId).populate('accessories').lean()
    const isCreatorOfCube = userId == cube.ownerId;
    res.render('details', { title: 'Details', cube, isCreatorOfCube })
});

router.get('/add-accessory', isAuth, isCreator, async (req, res) => {
    const cubeId = req.params.id;
    let cube = await dbCubes.findCubeById(cubeId);
    let cubeAttachesAccessories = cube.accessories;
    let accessories = await getFilteredAccessoriesWithout(cubeAttachesAccessories);
    res.render('attachAccessory', { title: 'Cube Accessory\'s', cube, accessories });
});

router.post('/add-accessory', isAuth, isCreator, async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id
    const accessory = await getOneAccessory(accessoryId);
    await dbCubes.attachAccessoryToCube(cubeId, accessory);
    res.redirect(`/cube/${cubeId}/details`);
});


router.get('/edit', isAuth, isCreator, (req, res) => {
    const cubeId = req.params.id;
    dbCubes.findCubeById(cubeId)
        .then(cube => {
            res.render('editCubePage', { title: 'Edit', cube });
        })
});

router.post('/edit', isAuth, isCreator, (req, res) => {
    const cubeId = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const difficultyLevel = req.body.difficultyLevel;
    const updatedCube = {
        name,
        description,
        imageUrl,
        difficultyLevel,
    }
    dbCubes.editCube(cubeId, updatedCube)
        .then(() => res.redirect(`/cube/${cubeId}/details`));
});

router.get('/delete', isAuth, isCreator, (req, res) => {
    res.render('deleteCubePage');
});



module.exports = router;
