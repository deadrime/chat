const { gql } = require('apollo-server');

const Chat = gql`
  type Chat {
    id: ID!
    title: String!
    creator: User
    members: [User]
    messages(lastId: ID, limit: Int): [Message]
  }
`;

module.exports = Chat;