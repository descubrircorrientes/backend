const express = require('express');
const articleRoute = express.Router();

const articleModel = require("../models/article/article");

//create article
articleRoute.post('/articles', (req, res) => {
    const newArticle = articleModel(req.body);
    newArticle.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//search all catergory
articleRoute.get('/articles', (req, res) => {
    articleModel.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

// get one article
articleRoute.get('/articles/:id', (req, res) => {
    const { id } = req.params;
    articleModel.findById(id)
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

// delete one article
articleRoute.delete('/articles/:id', (req, res) => {
    const { id } = req.params;
    articleModel.remove({"_id": id})
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

// update article
articleRoute.put('/articles/:id', (req, res) => {
    const { id } = req.params;
    const { category, subcategory, secondsubcategory, text} = articleModel(req.body);
    articleModel.updateOne(
        {"_id": id}, 
        { $set: { category, subcategory, secondsubcategory, text} }
    )
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

module.exports = articleRoute;