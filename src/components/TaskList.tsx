import { CloneButton, Datagrid, DateField, DeleteButton, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';

export const TaskList = () => (
    <List>
        <Datagrid rowClick="show">
            <ReferenceField source="project_id" reference="projects" />
            <TextField source="title" />
            <ReferenceField source="task_type_id" reference="task_types" />
            <DateField source="started_at" showTime={true} />
            <DateField source="finished_at" showTime={true} />
            <>
                <ShowButton />
                <EditButton />
                <CloneButton />
                <DeleteButton />
            </>
        </Datagrid>
    </List>
);