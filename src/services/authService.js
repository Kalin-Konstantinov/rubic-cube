const User = require('../models/user');
const bcrypt = require('bcrypt');
const { jwtPromise } = require('../utility/jwtUtils');

const createUser = async (username, password) => {
    await User.create({ username, password });
}

const login = async (data) => {
    const user = await User.findOne({ username: data.username });
    if(!user) {
        return false;
    }
    let result = await bcrypt.compare(data.password, user.password);
    if (!result) {
        return result;
    }
    let username = user.username;
    let _id = user._id;
    let token = await jwtPromise({ username, _id });
    return result;
}


module.exports = {
    createUser,
    login,
}