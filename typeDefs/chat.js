const { gql } = require('apollo-server');

const Chat = gql`
  type Chat {
    id: ID!
    users: [User]
    messages: [Message]
  }
`

module.exports = Chat;