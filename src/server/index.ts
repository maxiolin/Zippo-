import {ApolloServer} from "apollo-server"

import queries from "./queries"

const server = new ApolloServer({
  typeDefs: queries.typeDefs,
  resolvers: queries.resolvers,
  csrfPrevention: true,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});