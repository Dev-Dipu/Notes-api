const {Schema, model} = require('mongoose')

const noteSchema = Schema({
    title: String,
    description: String
})

const noteModel = model('note', noteSchema);

module.exports = noteModel;