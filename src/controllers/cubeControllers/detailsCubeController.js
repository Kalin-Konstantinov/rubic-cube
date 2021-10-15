const express = require('express');
const router = express.Router({ mergeParams: true });
const { getOneAccessory, getFilteredAccessoriesWithout } = require('../../services/accessoryService');
const dbCubes = require('../../services/cubeService');
const { isAuth } = require('../../middlewares/authMiddlewares');

router.get('/details', async (req, res) => {
    const id = req.params.id;
    let cube = await dbCubes.findCubeById(id).populate('accessories').lean()
    res.render('details', { title: 'Details', cube })
});

router.get('/add-accessory', isAuth, async (req, res) => {
    const cubeId = req.params.id;
    let cube = await dbCubes.findCubeById(cubeId);
    let cubeAttachesAccessories = cube.accessories;
    let accessories = await getFilteredAccessoriesWithout(cubeAttachesAccessories);
    res.render('attachAccessory', { title: 'Cube Accessory\'s', cube, accessories });
});

router.post('/add-accessory', isAuth ,async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id
    const accessory = await getOneAccessory(accessoryId);
    await dbCubes.attachAccessoryToCube(cubeId, accessory);
    res.redirect(`/cube/${cubeId}/details`);
});


router.get('/edit', isAuth, (req, res) => {
    res.render('editCubePage');
});

router.get('/delete', isAuth, (req, res) => {
    res.render('deleteCubePage');
});



module.exports = router;
