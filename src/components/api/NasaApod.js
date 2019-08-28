import React,{ useState, useEffect } from 'react';

import axios from 'axios';
// import { getApod } from './apod-api';

const NasaApod = () => {
  const [astroPhoto, updateAstroPhoto] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => (console.log(response)))
    .catch(error => (console.log("Error", error)))
  });

  return (
    <div className="nasa-container">
      {astroPhoto.map((photo, index) => {
        <img 
          src={ photo } 
          alt='Daily Astronomy Photo' 
          key={ index } 
        />
      })}
    </div>
  );
};

export default NasaApod;