const { gql } = require('apollo-server');

const RootQuery = gql`
  type Query {
    chat(id: ID!): Chat
  }
`;

module.exports = RootQuery