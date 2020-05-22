import React from 'react';
import { Link } from 'react-router-dom';

const NetworkError = () => (
  <div>
    <p>Some network error occurred!</p>
    <Link to="/">Refresh</Link>
  </div>
);
export default NetworkError;
