const { gql } = require('apollo-server-micro');

const Mutation = gql`
  type Mutation {
    sendMessage(chatId: ID!, text: String!): Message
  }
`;

module.exports = Mutation