const mongoose = require('mongoose');

const initDatabase = (dbConnectionString) => {
    return mongoose.connect(dbConnectionString);
}

module.exports = initDatabase;