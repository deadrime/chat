const { gql } = require('apollo-server');

const RootQuery = gql`
  type Query {
    me: User @isAuth
    myChats: [Chat] @isAuth
    token(username: String!, password: String!): String
    chat(id: ID!): Chat
  }
`;

module.exports = RootQuery