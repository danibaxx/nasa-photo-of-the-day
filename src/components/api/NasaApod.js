import React from 'react';

import apod from './apod.css';

const NasaApod = (props) => {
  // console.log("NasaApod", props);

  return (
    <div className="nasa-container">
      <h2>{props.title}</h2>
      <img src={props.url} alt="NASA Photo of the Day" />
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
};

export default NasaApod;