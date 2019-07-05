const { pubsub, NEW_MESSAGE, UPDATE } = require('../utils/pubSub');
const { withFilter } = require('graphql-subscriptions');
const { User, Chat } = require('../models');
const register = require('./register');
const createChat = require('./createChat');
const getToken = require('./getToken');
const joinChat = require('./joinChat');
const getMyChats = require('./myChats');
const sendMessage = require('./sendMessage');
const getChatMessages = require('./getChatMessages');

const resolvers = {
  Subscription: {
    newMessage: {
      subscribe: withFilter(() => pubsub.asyncIterator(NEW_MESSAGE), (payload, variables, context, info) => {
        console.log(variables.chatIds.includes(payload.newMessage.chat))
        return variables.chatIds.includes(payload.newMessage.chat)
      }),
    },
  },
  Query: {
    me: (_, { }, ctx) => ctx.user,
    token: getToken,
    myChats: getMyChats,
    chat: (_, { id }) => Chat.findById(id),
  },
  Mutation: {
    register,
    sendMessage,
    joinChat,
    createChat,
  },
  Message: {
    chat: ({ chatId }) => Chat.findById(chatId),
    chatId: ({ chat })  => chat,
    createdAt: ({ createdAt }) => new Date(createdAt).valueOf(),
  },
  Chat: {
    creator: ({ creator }) => User.findById(creator),
    members: ({ id }) => Chat.findById(id).populate('members').then(chat => chat.members),
    messages: getChatMessages,
  },
};

module.exports = resolvers;