import React, { useState, useEffect } from 'react';

import { getApod } from './apod-api';

const NasaApod = () => {
  const [apod, updateApod] = useState([]);

  
  return (
    <div className="nasa-container">
      <p>Hello from NasaApod!</p>
    </div>
  );
};

export default NasaApod;