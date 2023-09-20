import { ArrayField, Datagrid, DateField, NumberField, ReferenceField, RichTextField, Show, SimpleFormIterator, SimpleShowLayout, TabbedForm, TextField, required } from 'react-admin';

export const TaskShow = () => (
    <Show>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <ReferenceField source="project_id" reference="projects" fullWidth />
                <TextField source="title" resettable fullWidth />
                <RichTextField source="description" fullWidth />
                <ReferenceField source="task_type_id" reference="task_types" fullWidth />
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">
                <ArrayField source="parameters">
                    <Datagrid>
                        <TextField source="collection_site"/>
                        <DateField source="date_start" />
                        <DateField source="date_end" />
                        <TextField source="anomalous_datetime_start" />
                        <TextField source="anomalous_datetime_end" />
                        <NumberField source="data_partition_training"  />
                        <NumberField source="data_partition_testing"  />
                    </Datagrid>
                </ArrayField>
            </TabbedForm.Tab>
        </TabbedForm>
    </Show>
);