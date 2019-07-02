const { gql } = require('apollo-server-micro');

const Subscription = gql`
  type Subscription {
    message(chatId: ID): Message
  }
`;

module.exports = Subscription