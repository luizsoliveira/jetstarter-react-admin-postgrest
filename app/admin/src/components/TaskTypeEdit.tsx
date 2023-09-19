import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';

export const TaskTypeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" fullWidth/>
        </SimpleForm>
    </Edit>
);