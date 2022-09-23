const mongoose = require('mongoose')

const historyModel = mongoose.Schema({
    title: String,
    Subcategori: String
});

module.exports = mongoose.model('History', historyModel);