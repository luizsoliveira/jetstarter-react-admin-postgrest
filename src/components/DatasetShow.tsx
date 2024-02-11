import { DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TabbedForm, TextField } from 'react-admin';
//import { TaskInputShow } from './TaskInputShow';
// import stylesAdmin from '../styles/admin.module.css'
import { DatasetTypeBGPShow } from './DatasetTypeBGPShow';
import TaskSocket from './socket/TaskSocket';
import DatasetTable from './socket/DatasetTable';
import DatasetFeaturesGraphs from './socket/DatasetFeaturesGraphs';

export const DatasetShow = () => {
return (
    <Show>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <SimpleShowLayout>
                {/* <ReferenceField source="project_id" reference="projects"/> */}
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
                <DatasetTypeBGPShow/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">
                <TaskSocket/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Dataset">
                <DatasetTable/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Features Charts">
                <DatasetFeaturesGraphs key={Math.random()}/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
)};