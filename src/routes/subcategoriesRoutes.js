const express = require('express');
const subcategoriesRouter = express.Router();

const subCategoryModel = require("../models/subcategories/subcategories");

//create catergory
subcategoriesRouter.post('/subcategory', (req, res) => {
    const newSubCategory = subCategoryModel(req.body);
    newSubCategory.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//search all catergory
subcategoriesRouter.get('/subcategory', (req, res) => {
    subCategoryModel.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


module.exports = subcategoriesRouter;