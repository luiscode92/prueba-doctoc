const express = require('express');
const { ApolloServer } = require('apollo-server-express');
//const typeDefs = require('./schemas/schema');
//const resolvers = require('./resolvers');
const resolvers = require('./resolvers2');
const typeDefs = require('./schemas/schemas2')

//const server = new ApolloServer({ typeDefs, resolvers });
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
//app.use(compression());

// Make sure to await server.start() before applyMiddleware
(async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})();
