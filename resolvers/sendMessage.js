const { pubsub, NEW_MESSAGE } = require('../utils/pubSub')
const { Message } = require('../models')

module.exports = async (_, { chatId, text }, { user }) => {
  const message = new Message({
    text,
    from: user.id,
    chat: chatId,
  })
  await message.save()
  await pubsub.publish(NEW_MESSAGE, { message })
  return message
}