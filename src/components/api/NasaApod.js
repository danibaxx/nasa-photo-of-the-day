import React from 'react';
import Buttons from '../Buttons';

import './apod.css';

const NasaApod = (props) => {
  // console.log("NasaApod", props);

  return (
    <div className="nasa-container">
      <div className="img">
        <img 
          src={props.url} 
          alt="NASA Photo of the Day" 
          className="nasa-img"
        />
      </div>
      <div className="exp">
        <h2>{props.title}</h2>
        <h4>{props.date}</h4>
        <p>{props.explanation}</p>
        <Buttons />
      </div>
    </div>
  );
};

export default NasaApod;