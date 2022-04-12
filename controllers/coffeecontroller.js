const router = require('express').Router();
const db = require('../models/index.js');

router.get('/', (req, res) => {
    db.Projects.find({})
    .populate('languages')
    .populate('libraries')
    .exec((err, foundProjects) => {
        if (err) return console.log(err)
        res.json(foundProjects)
        console.log('foundProjects check')
    })
})

router.get('/:id', (req, res) => {
    db.Projects.findById(req.params.id)
    .populate('languages')
    .populate('libraries')
    .exec((err, foundProject) => {
        if (err) return console.log(err)
        res.json(foundProject)
    })
})

router.post('/', (req, res) => {
    db.Projects.create(req.body, (err, createdProject) => {
        if (err) return console.log(err)
        res.json(createdProject)
    })
})

router.put('/:id', (req, res) => {
    db.Projects.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        
    )
})