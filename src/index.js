const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    name: 'Victor Ross',
    email: 'victor2ross@gmail.com',
    projects: [{ title: 'Site Upgrade - Summer 2021' }]
  },
  {
    name: 'Amili Maura',
    email: 'amili@gmail.com',
    projects: [{ title: 'Site Upgrade - Summer 2021' }]
  }
]

const typeDefs = gql `

  type User {
    name: String,
    email: String,
    projects: [Project]
  }

  type Project {
    title: String,
    active: Boolean!,
    members: [User]
  }

  type Query {
    users: [User]
  }
  
`

const resolvers = {
  Query: {
    users: () => users
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server listening at ${url}`);
});