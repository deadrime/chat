const { gql } = require('apollo-server-micro');

const Chat = gql`
  type Chat {
    id: ID!
    users: [User]
    messages: [Message]
  }
`

module.exports = Chat;