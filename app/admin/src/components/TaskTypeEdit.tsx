import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const TaskTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="title" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);