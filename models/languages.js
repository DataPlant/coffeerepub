const mongoose = require('mongoose')
const Schema = mongoose.Schema

const langSchema = new Schema ({
    name: String,
    projectID: {type:mongoose.Types.ObjectId, ref: 'projects'}
})

const Languages = mongoose.model('Languages', langSchema)

module.exports = Languages