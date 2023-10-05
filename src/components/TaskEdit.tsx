import { Edit, ReferenceInput, TextInput, DateTimeInput, required, TabbedForm } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import { TaskTypeBGP } from './TaskTypeBGP';

export const TaskEdit = () => (
    <Edit>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <ReferenceInput source="project_id" reference="projects" fullWidth validate={[required()]}/>
                <TextInput source="title" resettable fullWidth validate={[required()]}/>
                <RichTextInput source="description" fullWidth />
                <ReferenceInput source="task_type_id" reference="task_types" fullWidth validate={[required()]}/>
                <DateTimeInput source="started_at"/>
                <DateTimeInput source="finished_at"/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">
                <TaskTypeBGP/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);