import { DateInput, Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const TaskCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source="project_id" reference="projects" />
            <TextInput source="title" resettable />
            <RichTextInput source="description" />
            <ReferenceInput source="task_type_id" reference="task_types" />
        </SimpleForm>
    </Create>
);