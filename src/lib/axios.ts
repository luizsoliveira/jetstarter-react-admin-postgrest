import axios from 'axios'

const ws_api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:7002',
    
  });

ws_api.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default ws_api;