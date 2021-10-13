const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Your password should be at least 6 symbols long.'],
    }
});

userScerma.pre('save', async function (next) {
    
})

const User = mongoose.model('User', userSchema);

module.exports = User;