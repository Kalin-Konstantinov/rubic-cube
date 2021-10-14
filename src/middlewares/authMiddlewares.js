const { jwtVerify } = require("../utility/jwtUtils");
const { USER_TOKEN_NAME } = require('../utility/constants');


const auth = async (req, res, next) => {
    let token = req.cookies[USER_TOKEN_NAME];
    if (!token) {
        return next();
    }
    try {
        let user = await jwtVerify(token)
        req.user = user;
        next();
    } catch (error) {
        res.redirect('/404');
    }

}

module.exports = {
    auth,
};