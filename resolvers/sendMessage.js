const { pubsub, NEW_MESSAGE, UPDATE } = require('../utils/pubSub')
const { Message } = require('../models')

module.exports = async (_, { chatId, text }, { user }) => {
  const newMessage = new Message({
    text,
    from: user.id,
    chat: chatId,
  })
  await newMessage.save()
  await pubsub.publish(NEW_MESSAGE, { newMessage })
  return newMessage
}