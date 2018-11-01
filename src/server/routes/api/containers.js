const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//LOAD
//Container Model
const Container = require('../../models/Container')

// @route GET api/profile/test
// @desc Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({ msg: "Containers works" }))

// @route   POST api/containers/create
// @desc   Create Container
// Public
router.post('/create', (req, res) => {
  const errors = {}
  const contFields = {}
  contFields.name = req.body.name
  contFields.dependencies = req.body.dependencies
  contFields.wrapper = req.body.wrapper
  contFields.children = req.body.children
  Container.findOne({name: req.body.name}).then(container => {
    if (container) {
      Container.findOneAndUpdate({ name: req.body.name }, { $set: contFields }, { new: true })
        .then(cont => res.json(cont))
    } else {
      Container.findOne({name: req.body.name}).then(container => {
        if(container) {
          errors.name = 'That container name already exists'
          res.status(400).json(errors)
        }
        new Container(contFields).save().then(container => res.json(container))
      })
    }
  })
})

// @route   POST api/containers/edit
// @desc   edit container
// @access  Public
router.post('/edit', (req, res) => {
  const errors = {}
  const contFields = {}
  if(typeof req.body.dependencies !== 'undefined') { //SPLIT the array
    contFields.dependencies = req.body.dependencies.split(',')
  }
  if(typeof req.body.children !== 'undefined') { //SPLIT the array
    contFields.children = req.body.children.split(',')
  }

  Container.findOneAndUpdate({ _id: req.body._id }, { $set: contFields }, { new: true })
    .then(cont => res.json(cont))
    .catch(err => res.status(404).json(err))
})

// GET api/containers/all
// Get all containers
// Public
router.get('/all', (req, res) => {
  const errors = {}
  Container.find()
  .then(containers => {
    if(!containers) {
      errors.nocontainers = 'There are no containers'
      return res.status(404).json(errors);
    }
    res.json(containers)
  })
  .catch(err => {
    res.status(404).json({ containers: 'There are no containers'})
  })
})
module.exports = router
