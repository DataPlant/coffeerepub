const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    projectname: String,
    apptype: String,
    languages: [{type:mongoose.Types.ObjectId, ref: 'lang'}],
    libraries: [{type:mongoose.Types.ObjectId, ref: 'lib'}]
})

const Projects = mongoose.model('Projects', projectSchema);
module.exports = Projects;