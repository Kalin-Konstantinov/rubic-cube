const User = require('../models/user');
const bcrypt = require('bcrypt');

const createUser = (username, password) => {
    User.create({ username, password });
}

const login = (username, password) => {

}


module.exports = {
    createUser,
}