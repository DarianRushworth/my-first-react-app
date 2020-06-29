import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./components/title"

function App() {
  return (
    <div className="App">
    <Title/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Codaisseur!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello Dazman
        </a>
      </header>
    </div>
  );
}

export default App;
