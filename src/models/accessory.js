const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                /^https?:\/\//i.test(value)
            },
            message: (props) => `${props.value} is not corret url address.`
        }
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;