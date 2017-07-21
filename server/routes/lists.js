const express = require('express')
var router = express.Router()

var List = require('../models/List.js')

router.all('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });

// GET /lists
router.get('/', (req, res) => {
    List.find((err, lists) => {
        if (err) console.error(err) //return next err();
        res.json(lists)
    })
})

module.exports = router
