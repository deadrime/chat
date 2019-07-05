const { Chat } = require('../models/')

module.exports = async(_, { title }, { user }) => {
  const newChat = new Chat({
    title,
    creator: user.id,
    members: [user.id],
  })

  await newChat.save()

  return newChat
}