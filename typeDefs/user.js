const { gql } = require('apollo-server');

const User = gql`
  type User {
    id: ID!
    username: String!
  }
`;

module.exports = User;