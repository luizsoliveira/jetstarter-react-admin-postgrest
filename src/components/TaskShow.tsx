import { DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TabbedForm, TextField } from 'react-admin';
//import { TaskInputShow } from './TaskInputShow';
// import stylesAdmin from '../styles/admin.module.css'
import { TaskTypeBGPShow } from './TaskTypeBGPShow';
import TaskSocket from './socket/TaskSocket';

export const TaskShow = () => {
return (
    <Show>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <SimpleShowLayout>
                <ReferenceField source="project_id" reference="projects"/>
                <TextField source="id" />
                <TextField source="title" />
                <RichTextField source="description"/>
                <ReferenceField source="task_type_id" reference="task_types"/>
                <DateField source='created_at' showTime={true}/>
                <DateField source='started_at' showTime={true}/>
                <DateField source='finished_at' showTime={true}/>
                <TextField source="return_code" />
                </SimpleShowLayout>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">     
                <TaskTypeBGPShow/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">
                <TaskSocket/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
)};