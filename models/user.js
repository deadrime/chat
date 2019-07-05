const mongoose = require('mongoose');
const shortid = require('shortid');
const convertId = require('../utils/convertId');

const User = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  username: {
    type: String,
    index: { unique: true },
    required: true,
  },
  name: {
    type: String,
  },
  passwordHash: {
    type: String
  }
}, { versionKey: false })

User.set('toJSON', convertId);

module.exports = mongoose.model('User', User);