const  jwt = require('jsonwebtoken');
const { SECRET } = require('./constants');

const jwtPromise = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign((user), SECRET, (err, token) => {
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