const express = require('express');
const router = express.Router();

const categoryModel = require("../models/categories/categories");

//create catergory
router.post('/category', (req, res) => {
    const newCategory = categoryModel(req.body);
    newCategory.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//search all catergory
router.get('/category', (req, res) => {
    const newCategory = categoryModel(req.body);
    newCategory.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


module.exports = router;