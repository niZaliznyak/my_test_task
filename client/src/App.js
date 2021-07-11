import React from 'react';
import io from "socket.io-client";
import './App.css';
import QuotesTableContainer from "./components/quotesTable/QuotesTableContainer";

function App() {

  const socket = io.connect('http://localhost:4000');
  socket.emit('start');
  socket.on('ticker', function(response) {
    const res = Array.isArray(response) ? response : [response];
    const json = res.map(item => JSON.stringify(item)).join('\n');
    //console.log('json', json);
  });

  return (
    <div className="App">
      <QuotesTableContainer/>
    </div>
  );
}

export default App;
