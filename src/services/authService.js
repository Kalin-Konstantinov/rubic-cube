const User = require('../models/user');
const bcrypt = require('bcrypt');
const { jwtPromise } = require('../utility/jwtUtils');
const { extractMongoErrorMessage } = require('../utility/mongoDBErrorMessageExtractor');

const createUser = async (username, password) => {
    try {
        await User.create({ username, password });
    } catch (err) {
        if (err.code == 11000) {
            throw { message: 'User already exists.' };
        };
        const mongoErrMessage = extractMongoErrorMessage(err);
        throw { message: mongoErrMessage };
    }
}

const login = async (data) => {

    try {
        const user = await User.findOne({ username: data.username });
        if (user == null) {
            throw { code: 403, message: 'User or password incorrect' }
        }
        let isValidUserData = await bcrypt.compare(data.password, user.password);
        if (isValidUserData == false) {
            throw { code: 403, message: 'User or password incorrect' }
        }
        let _id = user._id;
        let username = user.username;
        let token = await jwtPromise({ username, _id });
        return token;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createUser,
    login,
}