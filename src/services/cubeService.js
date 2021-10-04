const uniqid = require('uniqid')
const allCubes = require("../db/dbCubes");


const addCube = (cube) => {
    cube.id = uniqid();
    allCubes.push(cube);
    console.log(allCubes);
}


module.exports = addCube;