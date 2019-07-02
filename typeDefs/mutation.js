const { gql } = require('apollo-server');

const Mutation = gql`
  type Mutation {
    sendMessage(chatId: ID!, text: String!): Message
  }
`;

module.exports = Mutation