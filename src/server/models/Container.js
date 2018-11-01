const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContainerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  dependencies: {
    type: [String]
  },
  wrapper: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'styles'
  },
  children: {
    type: [Schema.Types.ObjectId],
    refPath: 'onModel',
    required: true
  },
  onModel: {
    type: String,
    enum: ['components', 'containers']
  }
})

module.exports = Container = mongoose.model('container', ContainerSchema)
