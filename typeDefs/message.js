const { gql } = require('apollo-server-micro');

const Message = gql`
  type Message {
    id: ID!
    text: String!
    from: User!
    chatId: ID!
    chat: Chat!
  }
`

module.exports = Message;