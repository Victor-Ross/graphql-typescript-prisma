import { DataSource, DataSourceConfig } from "apollo-datasource";



class ProjectAPI extends DataSource {
  store: any;
  context: any;

  constructor({ store }: { store: any }) {
    super();
    this.store = store;
  }

  initialize(config: DataSourceConfig<any>) {
    this.context = config.context;
  }
}