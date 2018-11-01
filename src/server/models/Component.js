const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ComponentSchema = new Schema({
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
    enum: ['styles', 'components']
  },
  stateful: {
    type: Boolean,
    required: true
  },

})

module.exports = Component = mongoose.model('component', ComponentSchema)
