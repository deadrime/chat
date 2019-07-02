const { gql } = require('apollo-server-micro');

const User = gql`
  type User {
    id: ID!
    name: String!
  }
`;

module.exports = User;