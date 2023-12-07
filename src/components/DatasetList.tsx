import { CloneButton, Datagrid, DateField, DeleteButton, EditButton, List, ReferenceField, ShowButton, TextField } from 'react-admin';

// const test = {id: 1, description:'descrição', date_start: 'inicio', date_fim: 'fim'}

// const {id, date_start, date_fim, ...rest} = test;

// console.log(rest)


// console.log()

export const DatasetList = () => {

    // const record = useRecordContext();
    // if (record) {
    //     const {started_at, finished_at, ...clonedTask} = record
    // } else {
    //     const clonedTask = {}
    // }
    return (
    <List>
        <Datagrid rowClick="show">
            <ReferenceField source="project_id" reference="projects" />
            <TextField source="title" />
            <ReferenceField source="task_type_id" reference="task_types" />
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