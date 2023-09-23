import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import styleAdmin from './admin.module.css'

export const ProjectMemberEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="user_id" reference="users" fullWidth/>
            <ReferenceInput source="project_id" reference="projects" fullWidth/>
        </SimpleForm>
    </Edit>
);