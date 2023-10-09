// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  fetchUtils,
  ListGuesser,
  // EditGuesser,
  ShowGuesser,
} from "react-admin";
import postgrestRestProvider, {
  IDataProviderConfig,
} from "@raphiniert/ra-data-postgrest";

import { UserList } from "./components/UserList";
import { UserCreate } from "./components/UserCreate";
import { UserEdit } from "./components/UserEdit";
import { UserShow } from "./components/UserShow";

import { ProjectList } from "./components/ProjectList";
import { ProjectShow } from "./components/ProjectShow";
import { ProjectCreate } from "./components/ProjectCreate";
import { ProjectEdit } from "./components/ProjectEdit";

import { ProjectMemberCreate } from "./components/ProjectMemberCreate";

import { TaskList } from "./components/TaskList";
import { TaskCreate } from "./components/TaskCreate";
import { TaskShow } from "./components/TaskShow";
import { TaskEdit } from "./components/TaskEdit";

import { TaskTypeList } from "./components/TaskTypeList";
import { TaskTypeCreate } from "./components/TaskTypeCreate";
import { TaskTypeEdit } from "./components/TaskTypeEdit";

import { authProvider } from "./authProvider";

import { env } from "./env";

import {AppTheme} from "./AppTheme"
import {Login} from "./components/auth";

interface httpClientOptions {
  headers: any
}

const httpClient = (url, options: httpClientOptions = {headers: false}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const config: IDataProviderConfig = {
  apiUrl: env.API_BASE_URL,
  //httpClient: fetchUtils.fetchJson,
  httpClient: httpClient,
  defaultListOp: "eq",
  // primaryKeys: defaultPrimaryKeys,
  // schema: defaultSchema,
  schema: () => 'secure',
  primaryKeys: new Map([
    ['project_members', ['user_id', 'project_id']],
]),
};

const dataProvider=postgrestRestProvider(config)



export const App = () => (
  <Admin loginPage={Login}  dataProvider={postgrestRestProvider(config)} authProvider={authProvider} theme={AppTheme}>
    <Resource
      name="users"
      recordRepresentation={(record) =>
        `${record.first_name} ${record.last_name}`
      }
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
      show={UserShow}
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
      name="project_members"
      recordRepresentation={(record) => `${record.project_id}-${record.user_id}`}
      list={ListGuesser}
      // show={ShowGuesser}
      create={ProjectMemberCreate}
      // edit={TaskTypeEdit}
    />
    <Resource
      name="tasks"
      recordRepresentation={(record) => `${record.title}`}
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
