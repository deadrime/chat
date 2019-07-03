const { gql } = require('apollo-server');

const Chat = gql`
  type Chat {
    id: ID!
    title: String!
    creator: User
    members: [User]
    messages(lastId: ID): [Message]
  }
`;

module.exports = Chat;