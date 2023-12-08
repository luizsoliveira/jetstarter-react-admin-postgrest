import { CloneButton, Datagrid, DateField, DeleteButton, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';

export const ExperimentList = () => {

    return (
    <List>
        <Datagrid rowClick="show">
            <TextField source="title" />
            <ReferenceField source="task_type_id" reference="task_types" label="Experiment type" />
            <DateField source="started_at" showTime={true} />
            <DateField source="finished_at" showTime={true} />
            <>
                <ShowButton />
                <EditButton />
                <CloneButton/>
                <DeleteButton />
            </>
        </Datagrid>
    </List>
)};