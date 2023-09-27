import { ArrayInput, SimpleFormIterator, RadioButtonGroupInput, DateTimeInput, NumberInput, SelectInput, DateField, Labeled, NumberField, SimpleShowLayout, TextField } from "react-admin";
import stylesAdmin from '../styles/admin.module.css'
import React from "react";
import { text } from "stream/consumers";

export const TaskTypeBGPShow = () => (
    <>
       <SimpleShowLayout>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Collection site">
                                <TextField textTransform="uppercase" source="parameters.collection_site"/>
                            </Labeled>
                        </div>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Datetime analysis start">
                                <DateField source="parameters.datetime_start" showTime={true} />
                            </Labeled>
                            <Labeled label="Datetime analysis end">
                                <DateField source="parameters.datetime_end" showTime={true} />
                            </Labeled>
                        </div>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Datetime anomalous start">
                                <DateField source="parameters.anomalous_datetime_start" showTime={true} />
                            </Labeled>
                            <Labeled label="Datetime anomalous end">
                                <DateField source="parameters.anomalous_datetime_end" showTime={true} />
                            </Labeled>
                        </div>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Data Partition Training (%)">
                                <NumberField source="parameters.data_partition_training" />
                            </Labeled>
                            <Labeled label="Data Partition Testing (%)">
                                <NumberField source="parameters.data_partition_testing" />
                            </Labeled>
                        </div>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Cache">
                                <TextField source="parameters.cache"/>
                            </Labeled>
                        </div>
                        <div className={stylesAdmin.inlineShowGroupFields}>
                            <Labeled label="Cache">
                                <TextField source="parameters.debug"/>
                            </Labeled>
                        </div>
        </SimpleShowLayout> 
    </>
                  
)