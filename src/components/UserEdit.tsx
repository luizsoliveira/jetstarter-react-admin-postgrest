import * as React from "react";
import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="first_name" validate={[required()]} fullWidth />
      <TextInput source="last_name" validate={[required()]} fullWidth />
      <TextInput source="email" validate={[required()]} fullWidth />
    </SimpleForm>
  </Edit>
);
