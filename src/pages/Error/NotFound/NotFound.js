import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <p>
      Looks like the page you're looking for has been removed or doesn't exist!
    </p>
    <Link to="/">Return to Home</Link>
  </div>
);
export default NotFound;
