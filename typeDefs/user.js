const { gql } = require('apollo-server');

const User = gql`
  type User {
    id: ID!
    name: String!
  }
`;

module.exports = User;