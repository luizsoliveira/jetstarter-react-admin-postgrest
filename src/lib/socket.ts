import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.WS_BASE_URL ? process.env.WS_BASE_URL : 'http://localhost:7002';

export const socket = io(URL); 