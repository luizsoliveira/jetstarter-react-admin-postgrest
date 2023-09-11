import { DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const TaskShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="project_id" reference="projects" />
            <TextField source="key" />
            <TextField source="title" />
            <RichTextField source="description" />
            <ReferenceField source="task_type_id" reference="task_types" />
            <TextField source="parameters" />
            <TextField source="results" />
            <DateField source="created_at" />
            <TextField source="started_at" />
            <TextField source="finished_at" />
        </SimpleShowLayout>
    </Show>
);