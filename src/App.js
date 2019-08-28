import React from "react";

import NavBar from './components/NavBar';
import NasaApod from './components/api/NasaApod';

import "./App.css";


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="App">
        <NasaApod />
      </div>
    </div>
  );
}

export default App;
