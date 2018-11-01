const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

//LOAD
//Component Model
const Component = require('../../models/Component')
const Style = require('../../models/Style')

// GET api/components/test
// Public
router.get('/test', (req, res) => res.json({ msg: "Components works" }))

// @route   POST api/components/create
// @desc   Create Component
// @access  Public
router.post('/create', (req, res) => {
  const errors = {}
  Component.findOne({name: req.body.name}).then(component => {
    if (component) {
      errors.name = 'Component already exists'
      return res.status(400).json(errors)
    } else {
      const newComponent = new Component({ name: req.body.name, dependencies: req.body.dependencies, wrapper: req.body.wrapper, children: req.body.children, stateful: req.body.stateful })
      newComponent.save().then(component => res.json(component)).catch(err => console.log(err))
    }})
})

// @route   POST api/components/edit
// @desc   Create Component
// @access  Public
router.post('/edit', (req, res) => {
  const errors = {}
  const compFields = {}
  if(typeof req.body.dependencies !== 'undefined') { //SPLIT the array
    compFields.dependencies = req.body.dependencies.split(',')
  }
  if(typeof req.body.children !== 'undefined') { //SPLIT the array
    compFields.children = req.body.children.split(',')
  }

  Component.findOneAndUpdate({ _id: req.body._id }, { $set: compFields }, { new: true })
    .then(comp => res.json(comp))
    .catch(err => res.status(404).json(err))
})

// GET api/components/all
// Get all components
// Private
router.get('/all', (req, res) => {
  const errors = {}
  Component.find()
  .then(components => {
    if(!components) {
      errors.nocomponents = 'There are no components'
      return res.status(404).json(errors);
    }
    res.json(components)
  })
  .catch(err => {
    res.status(404).json({ components: 'There are no components'})
  })
})

module.exports = router
