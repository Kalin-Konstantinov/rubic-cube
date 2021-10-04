const allCubes = require("../db/dbCubes");


const addCube = (cube) => {
    allCubes.push(cube);
    console.log(allCubes);
}


module.exports = addCube;