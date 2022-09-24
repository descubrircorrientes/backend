const express = require('express');
const categoriesRouter = express.Router();

const categoryModel = require("../models/categories/categories");

//create catergory
categoriesRouter.post('/category', (req, res) => {
    const newCategory = categoryModel(req.body);
    newCategory.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//search all catergory
categoriesRouter.get('/category', (req, res) => {
    categoryModel.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


module.exports = categoriesRouter;