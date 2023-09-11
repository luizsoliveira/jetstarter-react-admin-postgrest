import { DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const TaskTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Create>
);