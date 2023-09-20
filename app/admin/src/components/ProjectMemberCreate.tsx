import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import styleAdmin from './admin.module.css'

export const ProjectMemberCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users" fullWidth/>
            <ReferenceInput source="project_id" reference="projects" fullWidth/>
        </SimpleForm>
    </Create>
);