const express = require('express');
const { getOneAccessory, getFilteredAccessories } = require('../../services/accessoryService');
const dbCubes = require('../../services/cubeService');
const router = express.Router({ mergeParams: true });

router.get('/details', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).populate('accessories').lean()
        .then(cube => {
            res.render('details', { title: 'Details', cube })
        });
});

router.get('/add-accessory', async (req, res) => {
    const cubeId = req.params.id;
    let cube = await dbCubes.findCubeById(cubeId);
    let cubeAttachesAccessories = cube.accessories;
    let accessories = await getFilteredAccessories(cubeAttachesAccessories);
    res.render('attachAccessory', { title: 'Cube Accessory\'s', cube, accessories });
});

router.post('/add-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id
    const accessory = await getOneAccessory(accessoryId);
    await dbCubes.attachAccessoryToCube(cubeId, accessory);
    res.redirect(`/cube/${cubeId}/details`);
});

module.exports = router;
