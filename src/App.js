import React, { useState, useEffect } from "react";
import axios from 'axios';

import NavBar from './components/NavBar';
import NasaApod from './components/api/NasaApod';

import "./App.css";


const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=c8bRXvhzjrxiN2Hg5cNfbWhfx1fjUNd7mMvh4LMG')
      .then(response => {
        console.log("Response", response.data)
        setData(response.data)
      })
      .catch(error => (console.log("Error", error))
      )
  }, []);

  return (
    <div className="container">
      <NavBar />
      <div className="App">
        <NasaApod 
          title={ data.title }
          url={ data.url }
          date={ data.date }
          explanation={ data.explanation }
        />
      </div>
    </div>
  );
}

export default App;
