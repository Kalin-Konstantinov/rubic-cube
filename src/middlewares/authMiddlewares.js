const { jwtVerify } = require("../utility/jwtUtils");
const { USER_TOKEN_NAME } = require('../utility/constants');


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

module.exports = {
    auth,
    isAuth,
    isNotAuth,
};