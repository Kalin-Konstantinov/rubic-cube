const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = async (username, password) => {
    await User.create({ username, password });
}

const login = (username, password) => {

}


module.exports = {
    createUser,
}