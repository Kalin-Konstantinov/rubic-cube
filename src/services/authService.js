const User = require('../models/user');
const bcrypt = require('bcrypt');
const { jwtPromise } = require('../utility/jwtUtils');

const createUser = async (username, password) => {
    await User.create({ username, password });
}

const login = async (data) => {
    const user = await User.findOne({ username: data.username });
    let result = await bcrypt.compare(data.password, user.password);
    if(!result){
        return result;
    }
    let token = await jwtPromise(data.username);
    console.log(token);
    return result;
}


module.exports = {
    createUser,
    login,
}