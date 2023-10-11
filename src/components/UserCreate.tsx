// import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  PasswordInput,
  SelectInput,
} from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="first_name" validate={[required()]} fullWidth />
      <TextInput source="last_name" validate={[required()]} fullWidth />
      <TextInput source="email" validate={[required()]} fullWidth />
      <PasswordInput source="pass" validate={[required()]} fullWidth />
      <SelectInput label="User role" validate={[required()]} fullWidth source="role" choices={[
        { id: 'app_user', name: 'App User' },
        ]} />
    </SimpleForm>
  </Create>
);
