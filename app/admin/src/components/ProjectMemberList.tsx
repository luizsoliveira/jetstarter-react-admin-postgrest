import { Datagrid, DateField, DeleteButton, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';

export const ProjectMemberList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" />
            <ReferenceField source="project_id" reference="projects" />
            <DateField source="created_at" />
            <>
                <ShowButton />
                <EditButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);