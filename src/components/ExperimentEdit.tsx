import { ReferenceInput, TextInput, required, TabbedForm, Edit, DateTimeInput, AutocompleteInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { ExperimentTypeBGP } from './ExperimentTypeBGP';
import stylesAdmin from '../styles/admin.module.css'

export const ExperimentEdit = () => (
    <Edit>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                {/* <ReferenceInput source="project_id" reference="projects" fullWidth validate={[required()]}/> */}
                <ReferenceInput source="dataset_id" reference="datasets" label="oi" fullWidth validate={[required()]}>
                    <AutocompleteInput label="Dataset" sx={{ width: "100%" }}/>
                </ReferenceInput>
                <TextInput source="title" resettable fullWidth validate={[required()]}/>
                <RichTextInput source="description" fullWidth />
                <ReferenceInput source="task_type_id" reference="task_types" fullWidth validate={[required()]}/>
                <DateTimeInput source="started_at"/>
                <DateTimeInput source="finished_at"/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">
                <ExperimentTypeBGP/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Edit>
);