const express = require('express');
const { getAllAccessorys } = require('../../services/accessoryService');
const dbCubes = require('../../services/cubeService');
const router = express.Router({ mergeParams: true });

router.get('/details', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => res.render('details', { title: 'Details', cube }));
});

router.get('/add-accessory', (req, res) => {
    const id = req.params.id;
    dbCubes.findCubeById(id).lean()
        .then(cube => {
            getAllAccessorys()
                .then(accessories => {
                    res.render('attachAccessory', { title: 'Cube Accessory\'s', cube, accessories });
                });
        });
});

router.post('/add-accessory', async (req, res) => {
    const id = req.params.id;
    let acc = await dbCubes.findCubeById(id).push()
    console.log(acc)
});

module.exports = router;
