const { gql } = require('apollo-server-micro');

const RootQuery = gql`
  type Query {
    chat(id: ID!): Chat
  }
`;

module.exports = RootQuery