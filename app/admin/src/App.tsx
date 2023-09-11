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

import { authProvider } from "./authProvider";

import { env } from "./env";

interface httpClientOptions {
  headers: any
}

const httpClient = (url, options: httpClientOptions = {headers: false}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  console.log(token)
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const config: IDataProviderConfig = {
  apiUrl: env.API_BASE_URL,
  //httpClient: fetchUtils.fetchJson,
  httpClient: httpClient,
  defaultListOp: "eq",
  primaryKeys: defaultPrimaryKeys,
  schema: defaultSchema,
};

const dataProvider=postgrestRestProvider(config)

import {AppTheme} from "./AppTheme"

export const App = () => (
  <Admin dataProvider={postgrestRestProvider(config)} authProvider={authProvider} /*theme={AppTheme}*/>
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
