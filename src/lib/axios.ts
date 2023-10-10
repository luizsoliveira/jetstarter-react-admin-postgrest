import axios from 'axios'

const ws_api = axios.create({
    baseURL: process.env.WS_BASE_URL ? process.env.WS_BASE_URL : 'http://localhost:7002',
    
    
  });

ws_api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default ws_api;