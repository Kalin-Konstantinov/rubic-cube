
exports.extractMongoErrorMessage = (err) => Object.values(err.errors)[0].properties.message;

