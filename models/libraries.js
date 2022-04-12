const mongoose = require('mongoose')
const Schema = mongoose.Schema

const libSchema = new Schema ({
    name: String,
    projectID: {type:mongoose.Types.ObjectId, ref: 'projects'}
})

const Libraries = mongoose.model('Libraries', libSchema)

module.exports = Libraries