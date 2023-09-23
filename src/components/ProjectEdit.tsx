import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import styleAdmin from '../styles/admin.module.css'

export const ProjectEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" fullWidth/>
            <RichTextInput source="description" fullWidth/>
            <ReferenceInput source="manager_user_id" reference="users" className={styleAdmin.baseField}/>
        </SimpleForm>
    </Edit>
);