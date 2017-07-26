var mongoose = require('mongoose')

var ListSchema = new mongoose.Schema({
    title: String,
    description: String,
    updatedAt: {type: Date, default: Date.now},
    details: [{_id : false, detail: String}]
})

module.exports = mongoose.model('List', ListSchema)
