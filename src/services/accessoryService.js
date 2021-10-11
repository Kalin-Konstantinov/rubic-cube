const Accessory = require('../models/accessory');

const addAccessory = (accessoryData) => {
    const accessory = new Accessory(accessoryData);
    return accessory.save();
}

const getAllAccessorys = () => {
    return Accessory.find({}).lean();
}

const findAccessory = (accessoryId) => {

}

module.exports = {
    addAccessory,
    getAllAccessorys,
    findAccessory,
}