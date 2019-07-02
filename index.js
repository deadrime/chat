const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ 
  schema,
  context: async () => {
    // TODO - прокинуть юзера
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

module.exports = server.createHandler();