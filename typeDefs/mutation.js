const { gql } = require('apollo-server');

const Mutation = gql`
  type Mutation {
    register(username: String!, password: String!): String
    createChat(title: String, members: [ID]): Chat @isAuth
    joinChat(chatId: String): Chat @isAuth
    sendMessage(chatId: ID!, text: String!): Message @isAuth
    deleteMessage(chatId: ID!, text: String!): Boolean @isAuth 
  }
`;

module.exports = Mutation;