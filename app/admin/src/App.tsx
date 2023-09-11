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
import { ProjectCreate } from "./components/ProjectCreate";
import { ProjectEdit } from "./components/ProjectEdit";

import { TaskList } from "./components/TaskList";
import { TaskCreate } from "./components/TaskCreate";
import { TaskShow } from "./components/TaskShow";
import { TaskEdit } from "./components/TaskEdit";

import { TaskTypeList } from "./components/TaskTypeList";
import { TaskTypeCreate } from "./components/TaskTypeCreate";
import { TaskTypeEdit } from "./components/TaskTypeEdit";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
};

const config: IDataProviderConfig = {
  apiUrl: "http://localhost:3000",
  //httpClient: fetchUtils.fetchJson,
  httpClient: httpClient,
  defaultListOp: "eq",
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema,
};

import {AppTheme} from "./AppTheme"

export const App = () => (
  <Admin dataProvider={postgrestRestProvider(config)} /*theme={AppTheme}*/>
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
      edit={ProjectEdit}
      create={ProjectCreate}
    />
    <Resource
      name="tasks"
      list={TaskList}
      show={TaskShow}
      create={TaskCreate}
      edit={TaskEdit}
      
    />
    
    <Resource
      name="task_types"
      recordRepresentation={(record) => `${record.title}`}
      list={TaskTypeList}
      show={ShowGuesser}
      create={TaskTypeCreate}
      edit={TaskTypeEdit}
    />
  </Admin>
);
