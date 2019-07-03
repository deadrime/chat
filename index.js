const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const schemaDirectives = require('./directives');
const mongoose = require('./utils/mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/user');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives,
});

const server = new ApolloServer({
  schema,
  context: addContext,
  subscriptions: {
    onConnect: async (connectionParams) => {
      const token = connectionParams.Authorization && connectionParams.Authorization.split('Bearer ')[1]
      
      if (!token) throw new Error('No token provided');
      const payload = await jwt.verify(token, 'some_app_secret')
      const user = await User.findById(payload.id)
      if (!user) throw new Error('Auth error')

      return { 
        user 
      };
    },
  },
  introspection: true,
  playground: true,
});

mongoose.connection.on('open', () => {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})

async function addContext ({ req, connection }, ...args) {
  if (connection) {
    return connection.context
  } else {
    const token = req.headers.authorization && req.headers.authorization.split('Bearer ')[1]
    
    if (token) {
      const payload = await jwt.verify(token, 'some_app_secret')
      const user = await User.findById(payload.id)

      return { 
        user 
      };
    }
  }
}