const { jwtVerify } = require("../utility/jwtUtils");
const { USER_TOKEN_NAME } = require('../utility/constants');
const { findCubeById } = require("../services/cubeService");


const auth = (req, res, next) => {
    let token = req.cookies[USER_TOKEN_NAME];
    if (!token) {
        return next();
    }
    jwtVerify(token)
        .then(user => {
            req.user = user;
            next();
        })
}

const isAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(401).redirect('/user/login');
    }
    next();
}

const isNotAuth = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }
    next();
}

const isCreator = (req, res, next) => {
    const userId = req.user._id;
    const cubeId = req.params.id;
    findCubeById(cubeId)
        .then(cube => {
            const ownerId = cube.ownerId;
            if (ownerId == userId) {
                next();
            } else {
                res.redirect('/')
            }
        });
}

module.exports = {
    auth,
    isAuth,
    isNotAuth,
    isCreator,
};