const { jwtVerify } = require("../utility/jwtUtils");
const { USER_TOKEN_NAME } = require('../utility/constants');


const auth = (req, res, next) => {
    let token = req.cookies[USER_TOKEN_NAME];
    if (!token) {
        return next();
    }
    jwtVerify(token)
        .then(user =>{
            req.user = user;
            next();
        })
}

module.exports = {
    auth,
};