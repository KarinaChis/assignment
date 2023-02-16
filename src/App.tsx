import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import TableContainer from './components/TableContainer/index.tsx';

function App() {
  const [users, setUsers] = useState([])
  const fetchData = useCallback(() => {
    return fetch("https://63998da716b0fdad77409a5e.mockapi.io/api/v1/hikers")
          .then(async (response) =>{ 
            const data = await response.json();
            return data
          })
          .then((data) => setUsers(data));
  }, [users]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Attendees (123)</h1>
      <TableContainer rows={users}/>
    </div>
  );
}

export default App;
