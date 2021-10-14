const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: [6, 'Your password should be at least 6 symbols long.'],
    }
});

userSchema.pre('save', async function (next) {
    let hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;