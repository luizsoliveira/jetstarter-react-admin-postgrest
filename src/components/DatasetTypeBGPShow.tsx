import { Labeled, SimpleShowLayout, TextField } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'
// import React from "react";

export const DatasetTypeBGPShow = () => (
    <>
       <SimpleShowLayout>
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Collection site">
                    <TextField textTransform="uppercase" source="parameters.collection_site"/>
                </Labeled>
                <Labeled label="RRC">
                    <TextField textTransform="uppercase" source="parameters.ripe_ris_rrc"/>
                </Labeled>
            </div>
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Date analysis start">
                    <TextField source="parameters.date_start"/>
                </Labeled>
                <Labeled label="Time analysis start">
                    <TextField source="parameters.time_start"/>
                </Labeled>
                <Labeled label="Date analysis end">
                    <TextField source="parameters.date_end"/>
                </Labeled>
                <Labeled label="Time analysis end">
                    <TextField source="parameters.time_end"/>
                </Labeled>
            </div>
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Date anomalous start">
                    <TextField source="parameters.anomalous_date_start" />
                </Labeled>
                <Labeled label="Time anomalous start">
                    <TextField source="parameters.anomalous_time_start" />
                </Labeled>
                <Labeled label="Date anomalous end">
                    <TextField source="parameters.anomalous_date_end" />
                </Labeled>
                <Labeled label="Time anomalous end">
                    <TextField source="parameters.anomalous_time_end" />
                </Labeled>
            </div>
            {/* <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Data Partition Training (%)">
                    <NumberField source="parameters.data_partition_training" />
                </Labeled>
                <Labeled label="Data Partition Testing (%)">
                    <NumberField source="parameters.data_partition_testing" />
                </Labeled>
            </div> */}
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Feature extraction tool">
                    <TextField source="parameters.fe_system"/>
                </Labeled>
            </div>
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Cache">
                    <TextField source="parameters.cache"/>
                </Labeled>
            </div>
            <div className={stylesAdmin.inlineShowGroupFields}>
                <Labeled label="Debug">
                    <TextField source="parameters.debug"/>
                </Labeled>
            </div>
        </SimpleShowLayout> 
    </>
                  
)