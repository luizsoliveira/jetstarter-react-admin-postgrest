import {RadioButtonGroupInput, SelectInput, TextInput } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'
import { ripe_ris_rrcs } from "../consts/ripe_ris_rrcs";
// import { DateInput, TimeInput, DateTimeInput } from 'react-admin';

export const DatasetTypeBGP = () => (
    <>
        <RadioButtonGroupInput source="parameters.collection_site"  choices={[
        { id: 'ripe', name: 'RIPE' },
        // { id: 'route-views', name: 'Route Views' },
        ]} />
        <SelectInput label="RIPE RIS RRC" source="parameters.ripe_ris_rrc" choices={ripe_ris_rrcs   } />
        <div className={stylesAdmin.inlineGroupFields}>
        <TextInput source="parameters.date_start" helperText="format: YYYYMMDD" label="Date start"/>
        {/* <TextInput source="parameters.time_start" helperText="format: HHMM" label="Time start"/> */}
        <TextInput source="parameters.date_end" helperText="format: YYYYMMDD" label="Date end"/>
        {/* <TextInput source="parameters.time_end" helperText="format: HHMM" label="Time end"/>  */}
        {/* <DateTimeInput source="parameters.datetime_start" /> */}
        {/* <DateTimeInput source="parameters.datetime_end"  /> */}
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
        <TextInput source="parameters.anomalous_date_start" helperText="format: YYYYMMDD" label="Anomalous Date start"/>
        <TextInput source="parameters.anomalous_time_start" helperText="format: HHMM" label="Anomalous Time start"/>
        <TextInput source="parameters.anomalous_date_end" helperText="format: YYYYMMDD" label="Anomalous Date end"/>
        <TextInput source="parameters.anomalous_time_end" helperText="format: HHMM" label="Anomalous Time end"/>
        {/* <DateTimeInput source="parameters.anomalous_datetime_start" /> */}
        {/* <DateTimeInput source="parameters.anomalous_datetime_end" /> */}
        </div>
        {/* <div className={stylesAdmin.inlineGroupFields}>
        <NumberInput source="parameters.data_partition_training"  />
        <NumberInput source="parameters.data_partition_testing"  />
        </div>
        <SelectInput label="Sequence length RNN" source="parameters.rnn_length" choices={[
        { id: '5', name: '5' },
        { id: '10', name: '10' },
        { id: '20', name: '20' },
        ]} /> */}
        <RadioButtonGroupInput source="parameters.fe_system" defaultValue="c_sharp" label="Feature extraction tool"  choices={[
        { id: 'c_sharp', name: 'CSharp tool' },
        { id: 'c_plusplus', name: 'C++ tool' },
        ]} />
        <RadioButtonGroupInput source="parameters.cache" defaultValue="activated" label="Cache"  choices={[
        { id: 'activated', name: 'Activated' },
        { id: 'disabled', name: 'Disabled' },
        ]} />
        <RadioButtonGroupInput source="parameters.debug" defaultValue="disabled" label="Debug" choices={[
        { id: 'activated', name: 'Activated' },
        { id: 'disabled', name: 'Disabled' },
        ]} />
    </>
                  
)