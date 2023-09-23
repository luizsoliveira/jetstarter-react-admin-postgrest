import { ArrayField, Datagrid, DateField,Labeled, NumberField, ReferenceField, RichTextField, Show, SimpleFormIterator, SimpleShowLayout, TabbedForm, TextField, WithListContext, required } from 'react-admin';
//import { TaskInputShow } from './TaskInputShow';
import stylesAdmin from '../styles/admin.module.css'
import { TaskTypeBGPShow } from './TaskTypeBGPShow';

export const TaskShow = () => (
    <Show>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <SimpleShowLayout>
                <ReferenceField source="project_id" reference="projects"/>
                <TextField source="title" />
                <TextField source="key" />
                <RichTextField source="description"/>
                <ReferenceField source="task_type_id" reference="task_types"/>
                <DateField source='created_at' showTime={true}/>
                <DateField source='started_at' showTime={true}/>
                <DateField source='finished_at' showTime={true}/>
                </SimpleShowLayout>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">     
                <TaskTypeBGPShow/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">

            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
);