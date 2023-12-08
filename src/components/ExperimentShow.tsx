import { DateField, ReferenceField, RichTextField, Show, SimpleShowLayout, TabbedForm, TextField } from 'react-admin';

import FeatureSelectionImportances from './FeatureSelectionImportances';

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
                
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">
                
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Dataset">
                
            </TabbedForm.Tab>
            <TabbedForm.Tab label="EDA">
                
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Feature Selection">
                <FeatureSelectionImportances/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
)};