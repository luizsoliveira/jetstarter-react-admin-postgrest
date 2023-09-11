import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
  RichTextField,
  ReferenceManyField,
  Datagrid,
  TabbedShowLayout
} from "react-admin";

export const ProjectShow = () => (
  <Show>
    <TabbedShowLayout spacing={2}>
    <TabbedShowLayout.Tab label="General">
      <TextField source="id" />
      <TextField source="title" />
      <RichTextField source="description" />
      <ReferenceField source="manager_user_id" label="Manager" reference="users" />
      <DateField source="created_at" />
    </TabbedShowLayout.Tab>
    <TabbedShowLayout.Tab label="Members">
      <ReferenceManyField reference="project_members" target="project_id">
        <Datagrid>
          <ReferenceField source="user_id" reference="users" />
          <DateField source="created_at" />
        </Datagrid>
      </ReferenceManyField>
    </TabbedShowLayout.Tab>
    <TabbedShowLayout.Tab label="Tasks">
      <ReferenceManyField reference="tasks" target="project_id">
        <Datagrid>
          <TextField source="title" />
          <ReferenceField source="task_type_id" reference="task_types" />
          <DateField source="created_at" />
        </Datagrid>
      </ReferenceManyField>
    </TabbedShowLayout.Tab>
    </TabbedShowLayout>
  </Show>
);
