const { Message } = require('../models')

module.exports = async ({ id }, { lastId }) => {
  const query = Message
    .find({ chat: id })
    .sort({ createdAt: -1 })
    .limit(20)

  if (lastId) query.where('_id').lt(lastId)
  
  return query
}