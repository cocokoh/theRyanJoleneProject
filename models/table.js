const mongoose = require('mongoose')
// const User = require('../models/user')

var TableSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  capacity: {
    type: Number,
    default: 10
  },
  reservedFor: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
})

var Table = mongoose.model('Table', TableSchema)

module.exports = Table
