const express = require('express');
const articleRoute = express.Router();

const articleModel = require("../models/article/article");

//create catergory
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


module.exports = articleRoute;