const mongoose = require('mongoose');
const shortid = require('shortid');
const convertId = require('../utils/convertId')

const Chat = mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  title: {
    type: String,
    default: 'Новый чат',
  },
  creator: {
    type: String,
    ref: 'User',
  },
  members: [{
    type: String,
    ref: 'User',
  }],
}, { versionKey: false })

Chat.set('toJSON', convertId);

module.exports = mongoose.model('Chat', Chat);