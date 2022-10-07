const mongoose = require('mongoose')

const subCategoryModel = mongoose.Schema({
    title: String,
    category: String,
    secondSubcategory: String
});

module.exports = mongoose.model('SubCategory', subCategoryModel);