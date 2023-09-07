// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import postgrestRestProvider, {
  IDataProviderConfig,
  defaultPrimaryKeys,
  defaultSchema,
} from "@raphiniert/ra-data-postgrest";

import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { UserEdit } from "./components/UserEdit";

import { ProjectList } from "./components/ProjectList";
import { ProjectShow } from "./components/ProjectShow";

const config: IDataProviderConfig = {
  apiUrl: "http://localhost:3000",
  httpClient: fetchUtils.fetchJson,
  defaultListOp: "eq",
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema,
};

export const App = () => (
  <Admin dataProvider={postgrestRestProvider(config)}>
    <Resource
      name="users"
      recordRepresentation={(record) =>
        `${record.first_name} ${record.last_name}`
      }
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name="projects"
      recordRepresentation={(record) => `${record.title}`}
      list={ProjectList}
      show={ProjectShow}
    />
    <Resource
      name="tasks"
      recordRepresentation={(record) => `${record.title}`}
      list={ListGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="task_types"
      recordRepresentation={(record) => `${record.title}`}
      list={ListGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
