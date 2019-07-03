const mongoose = require('mongoose');
const convertId = require('../utils/convertId')

const Message = mongoose.Schema({
  text: {
    type: String,
  },
  from: {
    type: String,
    ref: 'User',
  },
  chat: {
    type: String,
    ref: 'Chat',
  },
}, { 
  versionKey: false,
  timestamps: true,
})

Message.set('toJSON', convertId);

module.exports = mongoose.model('Message', Message);