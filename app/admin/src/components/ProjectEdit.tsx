import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const ProjectEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="description" />
            <ReferenceInput source="manager_user_id" reference="users" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Edit>
);