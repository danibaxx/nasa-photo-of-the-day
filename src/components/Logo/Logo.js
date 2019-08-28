import React from 'react';

import logo from '../../img/Color-of-the-NASA-Logo.jpg';

import './logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        className="logo" 
        src={ logo } 
        alt="Nasa's Logo" 
      />
      <div className="apod">
        <h1>Astronomy Photo of the Day</h1>
      </div>
    </div>
  );
};

export default Logo;