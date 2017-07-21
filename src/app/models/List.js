var mongoose = require('mongoose')

var ListSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean,
    updatedAt: {type: Date, default: Date.now},
    contents: [{id: Number, detail: String}]
})

module.exports = mongoose.model('List', ListSchema)
