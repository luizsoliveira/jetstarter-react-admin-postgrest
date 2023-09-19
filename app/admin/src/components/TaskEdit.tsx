import { DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const TaskEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="project_id" reference="projects" fullWidth/>
            <TextInput source="title" fullWidth/>
            <RichTextInput source="description" fullWidth/>
            <ReferenceInput source="task_type_id" reference="task_types" fullWidth/>
        </SimpleForm>
    </Edit>
);