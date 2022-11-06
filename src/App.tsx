import React from 'react';
import './App.css';
import TheNavigation from './components/TheNavigation';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import Container from './components/Container';

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Container>
      {params => (
        <div className="Container">
          <TheNavigation />
          <Router />
        </div>
      )}
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
