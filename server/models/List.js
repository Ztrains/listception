var mongoose = require('mongoose')

var ListSchema = new mongoose.Schema({
    title: String,
    description: String,
    updatedAt: {type: Date, default: Date.now},
    contents: {id: Number, detail: String, completed: Boolean}
})

module.exports = mongoose.model('List', ListSchema)
