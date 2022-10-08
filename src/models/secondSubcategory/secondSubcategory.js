const mongoose = require('mongoose')

const secondSubCategoryModel = mongoose.Schema({
    title: String,
    category: String,
    subcategory: String
});

module.exports = mongoose.model('SecondSubCategory', secondSubCategoryModel);