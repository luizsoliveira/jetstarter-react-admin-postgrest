import { ArrayInput, SimpleFormIterator, RadioButtonGroupInput, DateTimeInput, NumberInput, SelectInput } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'

export const TaskTypeBGP = () => (
    <>
        <RadioButtonGroupInput source="parameters.collection_site"  choices={[
        { id: 'ripe', name: 'RIPE' },
        { id: 'route-views', name: 'Route Views' },
        ]} />
        <div className={stylesAdmin.inlineGroupFields}>
        <DateTimeInput source="parameters.datetime_start" />
        <DateTimeInput source="parameters.datetime_end"  />
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
        <DateTimeInput source="parameters.anomalous_datetime_start" />
        <DateTimeInput source="parameters.anomalous_datetime_end" />
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
        <NumberInput source="parameters.data_partition_training"  />
        <NumberInput source="parameters.data_partition_testing"  />
        </div>
        <SelectInput label="Sequence length RNN" source="parameters.rnn_length" choices={[
        { id: '5', name: '5' },
        { id: '10', name: '10' },
        { id: '20', name: '20' },
        ]} />
    </>
                  
)