// import stylesAdmin from  '../../styles/admin.module.css'
// import { Checkbox, FormControlLabel } from '@mui/material';

import {useEffect, useState} from 'react';
import ws_api from '../lib/axios';
import { useRecordContext } from 'ra-core';

import stylesAdmin from '../styles/admin.module.css'

export default function ExperimentEDA() {

const [edaHtml, setEdaHtml] = useState("");
  

  const record = useRecordContext();
  if (!record) return null;
    
  async function getRowsRemotely() {
    ws_api.get(`/task/${record.id}/eda.html`,{
    })
    .then(response => {
      //Converting object with multiple attributes to array with key/value pair
      setEdaHtml(response.data)
      return response
    })
    .catch(console.error)
  }

  useEffect(() => {

    getRowsRemotely()

    return () => {

    };

  }, []);

  if (edaHtml.length>0) {

    return (
      <iframe className={stylesAdmin.eda_iframe} srcDoc={edaHtml}/>
    );

  } else return (
    <p>Exploratory Data Analysis is not ready yet.</p>
  );

}