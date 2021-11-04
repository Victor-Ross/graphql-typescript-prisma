import { DataSource } from 'apollo-datasource';
import { DataSourceConfig } from '../types';

import { user } from '../types';


class UserAPI extends DataSource {
  store: any;
  context: any;

  constructor({ store }: { store: any }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig) {
    this.context = config.context;
  }

 getUsers = async () => {
    const result = await this.store.users.findMany({
      include: { projects: { include: { projects: true } } }
    });
  
    const allUsers = result.map((user: user) => {
      return { ...user,  projects: user.projects.map(assignment => assignment.project)};
    })
    return allUsers;
  };
}