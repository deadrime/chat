const pubsub = require ('./pubSub');
const { withFilter } = require('graphql-subscriptions');
const NEW_MESSAGE = 'new_message';

const resolvers = {
  Subscription: {
    message: {
      subscribe: withFilter(() => pubsub.asyncIterator(NEW_MESSAGE), (payload, variables) => {
        /* 
          Cейчас обновление приходит для конретного чата, т.е. мы подписываемся на конкетный чат
          Мб это нихрена неправильно и вообще стоит написать какую-нибудь структуру для обновлений, которая
          имеет type, который например enum и payload, который может быть чем-угодно
          С другой стороны, т.к. у нас ws, то никакой проблемы в том, чтобы подписаться на кучу
          всяких штук я не вижу...
        */ 
        return payload.message.chatId === variables.chatId
      }),
    },
  },
  Query: {
    chat: async (_, { id }) => {
      // берем из БД чатик
      return
    },
  },
  Mutation: {
    sendMessage: async(_, { chatId, text}) => {
      const msg = {
        id: 1,
        chatId,
        text,
      }
      await pubsub.publish(NEW_MESSAGE, { message: msg })
      return msg
    }
  },
  Message: {
    chat: async( { chatId }) => {
      // берем из бд чатик
      return {
        id: chatId
      }
    }
  }
};

module.exports = resolvers;