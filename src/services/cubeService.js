const Cube = require('../models/cube');


const addCube = (cubeData) => {
    let cube = new Cube(cubeData);
    return cube.save();
}

const findCubeById = (id) => Cube.findById(id).lean();

const getAllCubes = () => Cube.find().lean();

module.exports = {
    addCube,
    findCubeById,
    getAllCubes,
};