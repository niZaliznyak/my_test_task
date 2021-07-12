import React from 'react';
import io from "socket.io-client";
import './App.css';
import QuotesTableContainer from "./components/quotesTable/QuotesTableContainer";

function App() {

  return (
    <div className="App">
      <QuotesTableContainer/>
    </div>
  );
}

export default App;
