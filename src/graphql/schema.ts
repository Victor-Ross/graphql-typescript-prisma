import { gql } from 'apollo-server';


const typeDefs = gql `

  type User {
    id: Int
    name: String,
    email: String,
    password: String
    projects: [Project]
  }

  type Project {
    id: Int
    title: String,
    active: Boolean!,
    members: [User]
  }

  type Query {
    users: [User]
  }
  
`

export { typeDefs }