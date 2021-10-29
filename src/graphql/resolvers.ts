import { getUsers } from '../utils';


const resolvers = {
  Query: {
    users: async () => getUsers()
  }
}

export { resolvers };