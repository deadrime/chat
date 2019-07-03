const { gql } = require('apollo-server');

const Subscription = gql`
  type Subscription {
    messages(chatId: ID): Message
  }
`;

module.exports = Subscription;