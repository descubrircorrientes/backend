const mongoose = require('mongoose')

const categoryModel = mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Category', categoryModel);