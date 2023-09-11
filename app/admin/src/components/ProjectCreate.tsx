import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const ProjectCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <RichTextInput source="description" />
            <ReferenceInput source="manager_user_id" reference="users" />
            <DateInput source="created_at" />
        </SimpleForm>
    </Create>
);