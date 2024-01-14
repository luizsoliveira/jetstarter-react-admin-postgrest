import { Create, ReferenceInput, TextInput, required, TabbedForm, AutocompleteInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { ExperimentTypeBGP } from './ExperimentTypeBGP';

export const ExperimentCreate = () => (
    <Create>
        <TabbedForm>
            <TabbedForm.Tab label="Summary">
                {/* <ReferenceInput source="project_id" reference="projects" fullWidth validate={[required()]}/> */}
                <ReferenceInput source="dataset_id" reference="datasets" fullWidth validate={[required()]}>
                    <AutocompleteInput label="Dataset" sx={{ width: "100%" }}/>
                </ReferenceInput>
                <TextInput source="title" resettable fullWidth validate={[required()]}/>
                <RichTextInput source="description" fullWidth />
                <ReferenceInput source="task_type_id" reference="task_types" fullWidth validate={[required()]}/>
            </TabbedForm.Tab>
            <TabbedForm.Tab label="Input">
                <ExperimentTypeBGP/>
            </TabbedForm.Tab>
        </TabbedForm>
    </Create>
);