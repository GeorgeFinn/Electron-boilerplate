const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttributeSchema = new Schema({
  name: String,
  value: {}
})
const StyleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  attributes: {
    type: [AttributeSchema],
    required: true
  }
})

module.exports = Style = mongoose.model('style', StyleSchema)
