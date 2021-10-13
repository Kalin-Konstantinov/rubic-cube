const Accessory = require('../models/accessory');

const addAccessory = (accessoryData) => {
    const accessory = new Accessory(accessoryData);
    return accessory.save();
}

const getAllAccessorys = () => {
    return Accessory.find({}).lean();
}

const getOneAccessory = (accessoryId) => {
    return Accessory.findById(accessoryId);
}

const getFilteredAccessoriesWhitout = async (accessoryId) => {
    return await Accessory.find().where('_id').nin(accessoryId).lean();
}

module.exports = {
    addAccessory,
    getAllAccessorys,
    getFilteredAccessoriesWhitout,
    getOneAccessory,
}