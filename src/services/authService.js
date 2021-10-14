const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (username, password) => {
    await User.create({ username, password });
}

const login = async (data) => {
    const user = await User.findOne({ username: data.username });
    let result = await bcrypt.compare(data.password, user.password);
    return result;
}


module.exports = {
    createUser,
    login,
}