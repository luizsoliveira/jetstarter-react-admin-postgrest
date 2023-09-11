import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  RichTextField,
} from "react-admin";
import { ShowButton, EditButton, DeleteButton } from "react-admin";

export const ProjectList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="description" />
      <ReferenceField label="Manager" source="manager_user_id" reference="users" />
      <DateField source="created_at" />
      <>
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </>
    </Datagrid>
  </List>
);
