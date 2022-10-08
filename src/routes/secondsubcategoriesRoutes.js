const express = require('express');
const secondSubcategoriesRouter = express.Router();

const secondSubCategoryModel = require("../models/secondSubcategory/secondSubcategory");

//create catergory
secondSubcategoriesRouter.post('/secondsubcategory', (req, res) => {
    const newSecondSubCategory = secondSubCategoryModel(req.body);
    newSecondSubCategory.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//search all catergory
secondSubcategoriesRouter.get('/secondsubcategory', (req, res) => {
    secondSubCategoryModel.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


module.exports = secondSubcategoriesRouter;