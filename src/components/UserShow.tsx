import { DateField, EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <DateField source="created_at" />
            <EmailField source="email" />
        </SimpleShowLayout>
    </Show>
);