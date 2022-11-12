const mongoose = require('mongoose')

const articleModel = mongoose.Schema({
    category: String,
    subcategory: String,
    secondsubcategory: String,
    text: String,
});

module.exports = mongoose.model('Article', articleModel);