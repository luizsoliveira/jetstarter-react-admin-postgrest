import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import styleAdmin from './admin.module.css'

export const ProjectCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" fullWidth/>
            <RichTextInput source="description" fullWidth/>
            <ReferenceInput source="manager_user_id" reference="users" fullWidth/>
        </SimpleForm>
    </Create>
);