// import stylesAdmin from  '../../styles/admin.module.css'
// import { Checkbox, FormControlLabel } from '@mui/material';

import {useEffect, useState} from 'react';
import ws_api from '../lib/axios';
import { useRecordContext } from 'ra-core';
// import { LineChart } from '../LineChart';

import { features } from '../consts/features'
import {DataGrid, GridColDef} from '@mui/x-data-grid'

export default function FeatureSelectionImportances() {

const [importanceRows, setImportanceRows] = useState([]);
  

  const record = useRecordContext();
  if (!record) return null;
    
  async function getRowsRemotely() {
    ws_api.get(`/dataset/${record.dataset_id}/fs_importances`,{
    })
    .then(response => {
      //Converting object with multiple attributes to array with key/value pair
      const features_importances = Object
              .entries(response.data)
              .map(pair => {
                const feature_id = parseInt(pair[0].replace("F", ""))
                return {
                  id: feature_id,
                  feature: pair[0],
                  description: features[feature_id-1]['name'],
                  importance: pair[1]
                }
              })
      console.log(features_importances)
      setImportanceRows(features_importances)
      return response
    })
    .catch(console.error)
  }

  useEffect(() => {

    getRowsRemotely()

    return () => {

    };

  }, []);

  if (importanceRows.length>0) {

    const columns: GridColDef[] = [
      { field: 'feature', headerName: 'Feature', width: 100, sortable: false, },
      { field: 'description', headerName: 'Description', width: 500, sortable: false, },
      { field: 'importance', headerName: 'Importance', width: 250 },
    ];

    return (
        <div>
          <DataGrid
            rows={importanceRows}
            columns={columns}
          />
          <p>INFO: Features importances calculated using Extremely Randomized Trees Classifier (Extra Trees Classifier)</p>
        </div>
    );

  } else return (
    <p>Feature selection importances data is not ready yet.</p>
  );

}