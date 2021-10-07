const Accessory = require('../models/accessory');

const addAccessory = (accessoryData) => {
    const accessory = new Accessory(accessoryData);
    return accessory.save();
}

const getAllAccessorys = () => {
    
}


module.exports = {
    addAccessory,
}