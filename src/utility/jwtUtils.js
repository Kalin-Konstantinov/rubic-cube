const  jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

const jwtPromise = (userData) => {
    return new Promise((resolve, reject) => {
        jwt.sign(userData, SECRET, (err, token) => {
            if(err) {
                return reject(err);
            }
            return resolve(token);
        })
    })
}

module.exports = {
    jwtPromise,
}