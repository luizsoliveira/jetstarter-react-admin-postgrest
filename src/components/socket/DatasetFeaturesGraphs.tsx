// import stylesAdmin from  '../../styles/admin.module.css'
// import { Checkbox, FormControlLabel } from '@mui/material';

import React, {useEffect, useState} from 'react';
import ws_api from '../../lib/axios';
import { useRecordContext } from 'ra-core';
// import { LineChart } from '../LineChart';

import { features } from '../../consts/features'
import { ZoomLineChart } from '../ZoomLineChart';
import { LineChart } from '../LineChart';
import ZoomableLineChart from '../ZoomableLineChart';

  const sliceData = (dataset, column: string) => {

    let slicedArray = []

    for (const row of dataset) {
      slicedArray.push({
        datetime: row['DATETIME'],
        value: row[column],
        label: row['LABEL'],
      })
    }
    return slicedArray
  }


export default function DatasetFeaturesGraphs() {

  const [datasetRows, setDatasetRows] = useState([]);

  const task = useRecordContext();
  if (!task) return null;
  
  async function getRowsRemotely() {
    ws_api.get(`/dataset/${task.id}`,{
    })
    .then(response => {
      setDatasetRows(response.data)
      return response
    })
    .catch(console.error)
  }

  useEffect(() => {

    getRowsRemotely()

    return () => {

    };

  }, []);

  if (datasetRows.length>0) {

    // const graphData = sliceData(datasetRows, ['DATETIME', 'F1', 'LABEL'])
    // const graphData = sliceData(datasetRows, 'F1')
    // console.log(features)

    const graphItems = features.map((feature) => {
      //  return <LineChart key={feature.name} data={sliceData(datasetRows, `F${feature.id}`)} title={feature.name} feature_id={feature.id}/>
      return <ZoomableLineChart key={feature.name} data={sliceData(datasetRows, `F${feature.id}`)} title={feature.name} feature_id={feature.id} sample_length={100}/>
    });

    
    
    return (
        <div>
          {graphItems}
        </div>
    );

  } else return (
    <p>Dataset not ready yet.</p>
  );

  
}