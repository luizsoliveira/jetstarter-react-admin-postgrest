import { DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TabbedForm, TextField } from 'react-admin';

import FeatureSelectionImportances from './FeatureSelectionImportances';
import { ExperimentTypeBGPShow } from './ExperimentTypeBGPShow';
import TaskSocket from './socket/TaskSocket';
import DatasetTable from './socket/DatasetTable';
import ExperimentEDA from './ExperimentEDA';
import DatasetFeaturesGraphs from './socket/DatasetFeaturesGraphs';

export const ExperimentShow = () => {
return (
    <Show>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <SimpleShowLayout>
                    <TextField source="id" />
                    {/* <ReferenceField source="project_id" reference="projects"/> */}
                    <ReferenceField source="dataset_id" reference="datasets"/>
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
                <ExperimentTypeBGPShow/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">
                <TaskSocket/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Dataset">
                <DatasetTable/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Features Charts">
                <p>ATTENTION: the values of all features above were normalized using Zscore(ddof=1).</p>
                <DatasetFeaturesGraphs key={Math.random()}/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="EDA">
                <ExperimentEDA/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Feature Selection">
                <FeatureSelectionImportances/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
)};