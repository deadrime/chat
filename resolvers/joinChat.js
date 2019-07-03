const { Chat } = require('../models/')

module.exports = async(_, { chatId }, { user }) => {
  const chat = await Chat.findById(chatId)

  if (!chat) throw new Error(`No chat with id ${chatId}`)
  if (chat.members.includes(user.id)) return chat
  
  chat.members.push(user.id)
  await chat.save()

  return chat
}