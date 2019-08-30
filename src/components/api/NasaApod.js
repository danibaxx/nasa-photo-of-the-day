import React,{ useState, useEffect } from 'react';

import axios from 'axios';
// import { getApod } from './apod-api';

const NasaApod = (props) => {
  // console.log("NasaApod", props);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log("Response", response.data)
      setData(response.data)
    })
      .catch(error => (console.log("Error", error)))
  }, []);

  return (
    <div className="nasa-container">
    <h2>{data.title}</h2>
    <img src={data.url} />
    <p>{data.explanation}</p>

    </div>
  );
};

export default NasaApod;