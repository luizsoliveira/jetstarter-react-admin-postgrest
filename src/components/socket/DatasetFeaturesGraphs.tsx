// import stylesAdmin from  '../../styles/admin.module.css'
// import { Checkbox, FormControlLabel } from '@mui/material';

import {useEffect, useState} from 'react';
import ws_api from '../../lib/axios';
import { useRecordContext } from 'ra-core';
// import { LineChart } from '../LineChart';

import { features } from '../../consts/features'
// import ZoomableLineChart from '../ZoomableLineChart';
import { Loading , SelectArrayInput} from 'react-admin';
import CSVZoomableLineChart from '../CSVZoomableLineChart';
import {csv} from "d3";

interface ChoicesProps {
  id: number 
  name: string
}

export default function DatasetFeaturesGraphs() {
  let defaultActiveGraphs = [1,2,3,4,5,6,7,8,9,10,11,12,13,34,35,36,37]
  // let defaultActiveGraphs = [1]
  const [datasetRows, setDatasetRows] = useState([]);
  const[activeGraphs, setActiveGraphs] = useState([]);
  const[graphItems, setGraphItems] = useState([])
  const task = useRecordContext();
  if (!task) return null;
  
  async function getRowsRemotely() {
    // ws_api.get(`/dataset/${task.id}`,{
    // })
    // .then(response => {
    //   setDatasetRows(response.data)
    //   return response
    // })
    // .catch(console.error)
    csv(`/tasks/${task.id}/DATASET.csv`)
    .then(function(d) {
      setDatasetRows(d)
    })
  }

  useEffect(() => {

    setActiveGraphs(defaultActiveGraphs)
    getRowsRemotely()

    return () => {
    };

  }, []);

  useEffect(() => {
    const graphItem = features.map((feature, index) => {
      if(activeGraphs.includes(feature.id)){
        return (
          <>
            {/* <ZoomableLineChart key={feature.name} data={datasetRows} title={feature.name} feature_id={feature.id}/>  */}
            <CSVZoomableLineChart data={datasetRows} key={feature.name} title={feature.name} feature_id={feature.id}/> 
          </>
        )
      }
    });
    setGraphItems(graphItem)
  }, [activeGraphs])
  

  if (datasetRows.length>0 && datasetRows != undefined && datasetRows != null) {

    // const graphData = sliceData(datasetRows, ['DATETIME', 'F1', 'LABEL'])
    // const graphData = sliceData(datasetRows, 'F1')
    // console.log(features)

    const choices : ChoicesProps[] = features.map((feature) => {
      return {id:feature.id, name:feature.name}
    })
    
    return (
      <>
      <div>
        <SelectArrayInput
          source='Active Graphs'
          choices={
            choices
          }
          onChange={(e) => setActiveGraphs([...e.target.value])}
          defaultValue={defaultActiveGraphs}
        />
      </div>
      <div style={{marginLeft:'25px'}}>
        {graphItems}
      </div>
      </>
    );

  } else return (
    
    <div className="loading-charts">
      <Loading loadingPrimary='Requesting data...' loadingSecondary='Please wait...'/>
    </div>
  );

  
}