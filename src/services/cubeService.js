const Cube = require('../models/cube');


const addCube = (cubeData) => {
    let cube = new Cube(cubeData);
    return cube.save();
}

const findCubeById = (id) => Cube.findById(id);

const getAllCubes = () => Cube.find();

module.exports = {
    addCube,
    findCubeById,
    getAllCubes,
};