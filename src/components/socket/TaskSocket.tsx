import { useState, useEffect } from 'react';
import { useRecordContext } from 'ra-core';
import { io } from 'socket.io-client';
import { socket } from '../../lib/socket';
import ws_api from '../../lib/axios'
import { Terminal } from './Terminal';


export default function TaskSocket() {

  // "undefined" means the URL will be computed from the `window.location` object
  const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:7002';

  const task = useRecordContext();
  if (!task) return null;
  
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lineEvents, setLineEvents] = useState([]);
  const [lastLine, setLastLine] = useState();
  

  async function update_line_events(newLineNumber) {
    const last_line_printed = sessionStorage.getItem(`${task.key}_last_line_printed`, 0);
    
    // Avoiding duplicates
    if (newLineNumber > last_line_printed) {
      const begin = parseInt(last_line_printed) + 1
      const end = parseInt(newLineNumber)
      console.log(begin, end)

      ws_api.get(`/stdout_segment/${task.key}/${begin}/${end}`,{
      })
      .then(response => {
        const newLines = response.data
        setLineEvents(prevLines => [...prevLines, ...newLines])
        sessionStorage.setItem(`${task.key}_last_line_printed`, newLineNumber-1)
        return response
      })
      .catch(console.error)
    }
  
  }

  useEffect(() => {

    //Create the socket just when the record task is available
    const socket = io(`${URL}/stdout_monitor-${task.key}`);
    
    socket.connect()

    socket.on("connect", () => {
      console.log(`Connected with success in the stdout-monitor Namespace: ${socket.nsp.name} Socket id: ${socket.id}`);
      sessionStorage.setItem(`${task.key}_last_line_printed`, 0);
      setLineEvents([])
      socket.emit('hello', 'ping')
    });


    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onLastLineEvent(value) {
      setLastLine(value)
      update_line_events(value)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('lastLine', onLastLineEvent);
    // socket.on('file_update', onLineEvent);

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