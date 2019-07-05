const { gql } = require('apollo-server');

const Subscription = gql`
  type Subscription {
    newMessage(chatIds: [ID]): Message
  }
`;

module.exports = Subscription;