const express = require('express')
var router = express.Router()

var List = require('../models/List.js')

router.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
 });

// GET /lists
router.get('/', (req, res) => {
    List.find((err, lists) => {
        if (err) return console.error(err) //return next err();
        res.json(lists)
    })
})

// POST /lists
router.post('/', (req, res) => {
    List.create(req.body, (err, list) => {
        if (err) return console.error(err) //return next err();
        res.json(list)
    })
})

router.get('/:id', (req, res) => {
    List.findById(req.params.id, (err, list) => {
        if (err) return console.error(err)
        res.json(list)
    })
})

router.put('/:id', (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, (err, list) => {
        if (err) return console.error(err)
        res.json(list)
    })
})

router.delete('/:id', (req, res) => {
    List.findByIdAndUpdate(req.params.id, req.body, (err, list) => {
        if (err) return console.error(err)
        res.json(list)
    })
})

module.exports = router
