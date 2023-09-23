import { DateInput, Create, SimpleForm, TextInput } from 'react-admin';

export const TaskTypeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" fullWidth/>
        </SimpleForm>
    </Create>
);