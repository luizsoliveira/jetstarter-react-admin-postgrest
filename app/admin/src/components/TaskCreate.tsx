import { DateInput, Create, ReferenceInput, SimpleFormIterator, TextInput, ArrayInput, NumberInput, DateTimeInput, required, RadioButtonGroupInput, TabbedForm } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

export const TaskCreate = () => (
    <Create>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                <ReferenceInput source="project_id" reference="projects" fullWidth validate={[required()]}/>
                <TextInput source="title" resettable fullWidth validate={[required()]}/>
                <RichTextInput source="description" fullWidth />
                <ReferenceInput source="task_type_id" reference="task_types" fullWidth validate={[required()]}/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">
                <ArrayInput source="parameters">
                    <SimpleFormIterator>
                        <RadioButtonGroupInput source="collection_site" validate={[required()]} choices={[
                        { id: 'ripe', name: 'RIPE' },
                        { id: 'route-views', name: 'Route Views' },
                        ]} />
                        <DateInput source="date_start" validate={[required()]}/>
                        <DateInput source="date_end" validate={[required()]}/>
                        <DateTimeInput source="anomalous_datetime_start" validate={[required()]}/>
                        <DateTimeInput source="anomalous_datetime_end" validate={[required()]}/>
                        <NumberInput source="data_partition_training" validate={[required()]} />
                        <NumberInput source="data_partition_testing" validate={[required()]} />
                    </SimpleFormIterator>
                </ArrayInput>
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);