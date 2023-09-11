import {
  Datagrid,
  EmailField,
  List,
  DateField,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
  TextInput,
} from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="first_name" />
      <TextField source="last_name" />
      <DateField source="created_at" />
      <EmailField source="email" />
      <>
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </>
    </Datagrid>
  </List>
);
