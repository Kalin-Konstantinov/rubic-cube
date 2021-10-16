const Cube = require('../models/cube');


const addCube = (cubeData) => {
    let cube = new Cube(cubeData);
    return cube.save();
}

const findCubeById = (id) => Cube.findById(id).lean();

const getAllCubes = () => Cube.find().lean();

const filterCubes = async (name, from, to) => {

    let filtredCubes = await Cube.find().lean();
    if (name) {
        filtredCubes = filtredCubes.filter(x => x.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (from) {
        filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) >= Number(from));
    }
    if (to) {
        filtredCubes = filtredCubes.filter(x => Number(x.difficultyLevel) <= Number(to));
    }
    return filtredCubes;
}

const editCube = (cubeId, updatedCube) => {
    return Cube.findOneAndUpdate({ _id: cubeId }, updatedCube);
}

const deleteCube = (cubeId) => {
    return Cube.findOneAndDelete({ _id: cubeId });
}

const attachAccessoryToCube = async (cubeId, accessory) => {
    let cube = await Cube.findById(cubeId);
    cube.accessories.push(accessory);
    cube.save();
    console.log(cube);
}

module.exports = {
    addCube,
    findCubeById,
    getAllCubes,
    filterCubes,
    attachAccessoryToCube,
    editCube,
    deleteCube,
};