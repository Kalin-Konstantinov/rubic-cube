const allCubes = require("../db/dbCubes");


const addCube = (cube) => {
    cube.id = uniqid();
    allCubes.push(cube);
}

const findCubeById = (id) => {
    return allCubes.filter(x => x.id == id)[0];
}

const getAllCubes = () => {
    return allCubes
}

module.exports = {
    addCube,
    findCubeById,
    getAllCubes,
};