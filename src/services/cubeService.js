const uniqid = require('uniqid')
const allCubes = require("../db/dbCubes");


const addCube = (cube) => {
    cube.id = uniqid();
    allCubes.push(cube);
    console.log(allCubes);
}

const findCubeById = (id) => {
    return allCubes.filter(x => x.id == id)[0];
}

module.exports = {
    addCube,
    findCubeById
};