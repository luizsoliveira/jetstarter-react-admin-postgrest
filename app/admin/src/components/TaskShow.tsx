import { ArrayField, Datagrid, DateField, NumberField, ReferenceField, RichTextField, Show, SimpleFormIterator, SimpleShowLayout, TabbedForm, TextField, WithListContext, required } from 'react-admin';
//import { TaskInputShow } from './TaskInputShow';

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
                <SimpleShowLayout>
                        <TextField label="Collection site" source="parameters.collection_site"/>
                        <DateField source="parameters.date_start" />
                        <DateField source="parameters.date_end" />
                        <TextField source="parameters.anomalous_datetime_start" />
                        <TextField source="parameters.anomalous_datetime_end" />
                        <NumberField source="parameters.data_partition_training"  />
                        <NumberField source="parameters.data_partition_testing"  />
                </SimpleShowLayout>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Terminal">

            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
);