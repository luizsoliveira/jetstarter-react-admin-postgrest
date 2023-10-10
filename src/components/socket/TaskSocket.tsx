import { useState, useEffect } from 'react';
import { useRecordContext } from 'ra-core';
import { io } from 'socket.io-client';
import { socket } from '../../lib/socket';
import ws_api from '../../lib/axios'
import { Terminal } from './Terminal';


export default function TaskSocket() {

  // "undefined" means the URL will be computed from the `window.location` object
  const URL = process.env.WS_BASE_URL ? process.env.WS_BASE_URL : 'http://localhost:7002/websocket';
  
  const task = useRecordContext();
  if (!task) return null;
  
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lineEvents, setLineEvents] = useState([]);
  const [lastLine, setLastLine] = useState();
  

  async function update_line_events(newLineNumber) {
    const last_line_printed = sessionStorage.getItem(`${task.id}_last_line_printed`);
    
    // Avoiding duplicates
    if (newLineNumber > last_line_printed) {
      const begin = parseInt(last_line_printed) + 1
      const end = parseInt(newLineNumber)
      console.log(begin, end)

      ws_api.get(`/stdout_segment/${task.id}/${begin}/${end}`,{
      })
      .then(response => {
        const newLines = response.data
        setLineEvents(prevLines => [...prevLines, ...newLines])
        sessionStorage.setItem(`${task.id}_last_line_printed`, (newLineNumber-1).toString())
        return response
      })
      .catch(console.error)
    }
  
  }

  useEffect(() => {

    const socket = io(`${URL}/stdout_monitor-${task.id}`);
    
    socket.connect()

    // socket.on("connect", () => {
    //   console.log(`Connected with success in the stdout-monitor Namespace: ${socket.nsp.name} Socket id: ${socket.id}`);
    //   sessionStorage.setItem(`${task.id}_last_line_printed`, 0);
    //   setLineEvents([])
    //   socket.emit('hello', 'ping')
    // });

    //Setup executed after connected
    function postConnectSetup() {
      console.log(`Connected with success in the stdout-monitor Namespace: ${socket.nsp.name} Socket id: ${socket.id}`);
      sessionStorage.setItem(`${task.id}_last_line_printed`, 0);
      setLineEvents([])
      socket.emit('hello', 'ping')
    }


    function onConnect() {
      setIsConnected(true);
      postConnectSetup();

    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onLastLineEvent(value) {
      //console.log(`Last line received: ${value}`)
      setLastLine(value)
      update_line_events(value)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('lastLine', onLastLineEvent);
    

    //Cleanup function
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('lastLine', onLastLineEvent);
      socket.disconnect();
    };
  }, []);

  return (
    <div className="TaskSocket">
      <Terminal lines={ lineEvents } />
      {/* <ConnectionState isConnected={ isConnected } />
      <p>Last line: {lastLine}</p> */}
      {/* <ConnectionManager /> */}
      {/* <MyForm /> */}
    </div>
  );
}