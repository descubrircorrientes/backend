const express = require('express');
const router = express.Router();

const historyModel = require("../models/history/historyTitle");

//create article
router.post('/historia', (req, res) => {
    const historyTitle = historyModel(req.body);
    historyTitle.save()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


//get all historyTitles

router.get('/historia', (req, res) => {
    historyModel.find()
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});

//get 1 historyTitles

router.get('/historia/:id', (req, res) => {
    const { id } = req.params;
    historyModel.findById(id)
                .then((data) => res.json(data))
                .catch(() => res.json({
                    mmessage: error
                }));
});


module.exports = router;