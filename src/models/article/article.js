const mongoose = require('mongoose')

const articleModel = mongoose.Schema({
    category: String,
    subcategory: String,
    secondsubcategory: String,
    title: String,
    text: {
        title: String,
        paragraph: String
        },
    images: String,
    id: String
});

module.exports = mongoose.model('Article', articleModel);