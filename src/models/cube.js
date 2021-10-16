const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Accessory' }],
    ownerId: {
        type: String,
        required: true,
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;