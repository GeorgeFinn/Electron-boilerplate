const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// LOAD
// Style Model
const Style = require('../../models/Style')
// GET api/users/test
// Public
router.get('/test', (req, res) => res.json({msg: "Styles works"}))

// @route   POST api/styles/create
// @desc   Create Style
// Public
router.post('/create', (req, res) => {
  const errors = {}
  Style.findOne({name: req.body.name}).then(style => {
    if (style) {
      errors.name = 'Style already exists'
      return res.status(400).json(errors)
    } else {
      const newStyle = new Style({ name: req.body.name, category: req.body.category, type: req.body.type })
      newStyle.save().then(style => res.json(style)).catch(err => console.log(err))
    }})
})

// @route   POST api/styles/edit
// @desc   edit container
// @access  Public
router.post('/edit', (req, res) => {
  const errors = {}
  const styleFields = {}
  if(typeof req.body.attributes !== 'undefined') { //SPLIT the array
    styleFields.attributes = req.body.attributes
  }
  Style.findOneAndUpdate({ _id: req.body._id }, { $set: styleFields }, { new: true })
    .then(style => res.json(style))
    .catch(err => res.status(404).json(err))
})

// GET api/styles/all
// Get all styles
// Public
router.get('/all', (req, res) => {
  const errors = {}
  Style.find()
  .then(styles => {
    if(!styles) {
      errors.nostyles = 'There are no styles'
      return res.status(404).json(errors);
    }
    res.json(styles)
  })
  .catch(err => {
    res.status(404).json({ styles: 'There are no styles'})
  })
})


module.exports = router
