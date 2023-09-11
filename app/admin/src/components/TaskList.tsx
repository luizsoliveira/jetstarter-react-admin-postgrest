import { Datagrid, DateField, List, ReferenceField, TextField } from 'react-admin';

export const TaskList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="project_id" reference="projects" />
            <TextField source="title" />
            <TextField source="description" />
            <ReferenceField source="task_type_id" reference="task_types" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);