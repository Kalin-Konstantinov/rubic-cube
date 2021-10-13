const User = require('../models/user');

const createUser = (username, password) => {
    bcrypt.hash(password, 10, function (err, hash) {
        const user = new User({ username, password: hash });
        user.save();
    });
}


module.exports = {
    createUser,
}