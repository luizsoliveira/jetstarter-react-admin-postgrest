import {NumberInput, RadioButtonGroupInput, SelectInput, required } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'

export const ExperimentTypeBGP = () => (
    <>
        <div className={stylesAdmin.inlineGroupFields}>
            <NumberInput source="parameters.data_partition_training" validate={[required()]} min={1} max={100} step={1} label="Percentage of data for training (%)" helperText="Percentage of the total data (or anomalous data) that will be used for training during data partitioning step." />
        </div>
        
        <RadioButtonGroupInput source="parameters.data_partition_reference" validate={[required()]} defaultValue="anomalous" label="Reference to calculate the partitions" choices={[
        { id: 'anomalous', name: 'Anomalous data points' },
        { id: 'total', name: 'Entire dataset' },
        ]} />
        <SelectInput label="Sequence length RNN" validate={[required()]} source="parameters.rnn_length" choices={[
        { id: '5', name: '5' },
        { id: '10', name: '10' },
        { id: '20', name: '20' },
        ]} />
        <RadioButtonGroupInput source="parameters.debug" validate={[required()]} defaultValue="disabled" label="Debug" choices={[
        { id: 'activated', name: 'Activated' },
        { id: 'disabled', name: 'Disabled' },
        ]} />
    </>
                  
)