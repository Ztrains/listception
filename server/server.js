const express = require('express')
const mongoose = require('mongoose')
const http = require('http')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/listception')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err))

var app = express()
var lists = require('./routes/lists')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/lists', lists);   //mounts /lists route to the lists.js file



app.listen(3000, () => {
    console.log('listening on 3000')
})

module.exports = app
