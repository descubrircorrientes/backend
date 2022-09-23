const mongoose = require('mongoose')

const historySubTtilesModel = mongoose.Schema({
    title: String,
    category: String,
    Subcategory: String,
    Article: {
        Title: String,
        Text: String,
        Image: Image
    }
});

module.exports = mongoose.model('History', historySubTtilesModel);