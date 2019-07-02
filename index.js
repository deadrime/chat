const { ApolloServer, makeExecutableSchema } = require('apollo-server-micro');
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
  introspection: true,
  playground: true,
});

module.exports = server.createHandler();