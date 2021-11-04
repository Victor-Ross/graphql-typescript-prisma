import 'dotenv/config';
import { ApolloServer } from 'apollo-server';

import { typeDefs } from '../src/graphql/schema';
import { resolvers } from '../src/graphql/resolvers';


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: String }) => {
  console.log(`Server listening at ${url}`);
});