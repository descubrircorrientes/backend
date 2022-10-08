const mongoose = require('mongoose')

const articleModel = mongoose.Schema({
    category: String,
    subcategory: String,
    secondsubcategory: String,
    title: String,
    text: String,
    images: String
});

module.exports = mongoose.model('Article', articleModel);