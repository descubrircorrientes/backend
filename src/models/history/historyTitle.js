const mongoose = require('mongoose')

const historyModel = mongoose.Schema({
    title: String,
    Subcategory: String
});

module.exports = mongoose.model('History', historyModel);