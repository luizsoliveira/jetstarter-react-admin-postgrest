import { DateInput, Create, ReferenceInput, SimpleFormIterator, TextInput, ArrayInput, NumberInput, DateTimeInput, required, RadioButtonGroupInput, TabbedForm, choices } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

import stylesAdmin from '../styles/admin.module.css'

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
                <ArrayInput label="" source="parameters" defaultValue={{}}>
                    <SimpleFormIterator disableAdd disableRemove={true} disableReordering disableClear>
                        <RadioButtonGroupInput source="parameters.0.collection_site" validate={[required()]} choices={[
                        { id: 'ripe', name: 'RIPE' },
                        { id: 'route-views', name: 'Route Views' },
                        ]} />
                        <div className={stylesAdmin.inlineGroupFields}>
                        <DateTimeInput source="parameters.0.date_start" validate={[required()]} helperText={'Start of analysis period'} />
                        <DateTimeInput source="parameters.0.date_end" validate={[required()]} />
                        </div>
                        <div className={stylesAdmin.inlineGroupFields}>
                        <DateTimeInput source="parameters.0.anomalous_datetime_start" validate={[required()]}/>
                        <DateTimeInput source="parameters.0.anomalous_datetime_end" validate={[required()]}/>
                        </div>
                        <div className={stylesAdmin.inlineGroupFields}>
                        <NumberInput source="parameters.0.data_partition_training" validate={[required()]} />
                        <NumberInput source="parameters.0.data_partition_testing" validate={[required()]} />
                        </div>
                    </SimpleFormIterator>
                </ArrayInput>
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);