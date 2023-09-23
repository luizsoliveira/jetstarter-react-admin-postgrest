import { Datagrid, DateField, List, TextField } from 'react-admin';

export const TaskTypeList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);