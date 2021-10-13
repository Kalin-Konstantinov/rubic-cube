const User = require('../models/user');

const createUser = (username, password) => {
    const user = new User({ username, password});
    user.save();
}


module.exports = {
    createUser,
}