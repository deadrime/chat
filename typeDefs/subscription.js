const { gql } = require('apollo-server');

const Subscription = gql`
  type Subscription {
    message(chatId: ID): Message
  }
`;

module.exports = Subscription