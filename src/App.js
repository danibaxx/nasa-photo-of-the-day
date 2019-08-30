import React from "react";

import NavBar from './components/NavBar';
import NasaApod from './components/api/NasaApod';

import "./App.css";


function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="App">
        <NasaApod 
          title="Props title"
          url="URL"
          explanation="some explanation"
        />
      </div>
    </div>
  );
}

export default App;
