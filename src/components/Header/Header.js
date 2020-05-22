import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { useQuery } from '@apollo/react-hooks';
import { GET_PROFILE } from '../../apollo/queries';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { loading, data } = useQuery(GET_PROFILE);
  const { logoutUser } = useAuth();

  let body = null;

  if (loading) {
    body = <p>Loading...</p>;
  } else if (data && data.getProfile) {
    body = (
      <div>
        Hello, {data.getProfile.name}! You are logged in with{' '}
        {data.getProfile.email}
        <button onClick={logoutUser}>Logout</button>
      </div>
    );
  }

  return (
    <>
      <ul>
        {routes.map((route) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      {body}
    </>
  );
};

export default Header;
