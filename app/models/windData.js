const mongoose = require('mongoose')

const Schema = mongoose.Schema
const WindDataSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    unique: true
  },
  i: {
    type: Number,
    required: false,
    default: null
  },
  w_d: {
    type: String,
    required: false,
    default: null
  },
  w_s: {
    type: Number,
    required: false,
    default: null
  },
  v: {
    type: Number,
    required: false,
    default: null
  }
})

module.exports = mongoose.model('WindData', WindDataSchema)
