import React from 'react';
import './App.css';
import QuotesTableContainer from "./components/quotesTable/QuotesTableContainer";
import {Container, Navbar} from "react-bootstrap";

function App() {

  return (
    <div className="App">
        <Navbar expand="lg" variant="dark" bg="primary">
            <Container>
                <Navbar.Brand href="#">React Test Task</Navbar.Brand>
            </Container>
        </Navbar>
      <QuotesTableContainer/>
    </div>
  );
}

export default App;
