import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils/auth';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
