import {Labeled, NumberField, NumberInput, RadioButtonGroupInput, SelectInput, required } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'

export const ExperimentTypeBGPShow = () => (
    <>
        <div className={stylesAdmin.inlineGroupFields}>
            <Labeled label="Percentage of data for training (%)">
                <NumberField source="parameters.data_partition_training" label="Percentage of data for training (%)" helperText="Percentage of the total data that will be used for training during data partitioning step." />
            </Labeled>
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
            <Labeled label="Reference to calculate the partitions">
                    <NumberField source="parameters.data_partition_reference" label="Reference to calculate the partitions" />
            </Labeled>
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
            <Labeled label="Sequence length RNN">
                    <NumberField source="parameters.rnn_length" label="Sequence length RNN" />
            </Labeled>
        </div>
        <div className={stylesAdmin.inlineGroupFields}>
            <Labeled label="Debug">
                    <NumberField source="parameters.debug" label="Debug" />
            </Labeled>
        </div>
    </>
                  
)