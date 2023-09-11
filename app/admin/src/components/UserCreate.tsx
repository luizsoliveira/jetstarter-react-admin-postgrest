import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
} from "react-admin";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="first_name" validate={[required()]} fullWidth />
      <TextInput source="last_name" validate={[required()]} fullWidth />
      <TextInput source="email" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
