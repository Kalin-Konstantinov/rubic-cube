const express = require('express');
const { getAllAccessorys } = require('../../services/accessoryService');
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
    let [cube, accessories] = await Promise.all([dbCubes.findCubeById(cubeId), getAllAccessorys()])
    res.render('attachAccessory', { title: 'Cube Accessory\'s', cube, accessories });
});

router.post('/add-accessory', async (req, res) => {
    const accessoryId = req.body.accessory;
    const cubeId = req.params.id
    let cube = await dbCubes.findCubeById(cubeId);
    console.log(cube.accessories);
    cube.accessories.push(accessoryId);
    res.redirect(`/cube/${cubeId}/details`);
});

module.exports = router;
