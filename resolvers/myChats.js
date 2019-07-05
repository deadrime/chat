const { Chat, User } = require('../models/')

module.exports = async(_, params, { user }) => {
  const chats = await Chat.find({
    creator: user.id
  })

  // console.log(chats)

  return chats
}