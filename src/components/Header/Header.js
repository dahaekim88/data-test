import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROFILE, GET_USERS } from '../../apollo/queries';
import { LOGOUT } from '../../apollo/mutations';
import { setAccessToken } from '../../utils/accessToken';

const Header = () => {
  const { loading, data } = useQuery(GET_PROFILE);
  const [logout, { client }] = useMutation(LOGOUT);

  let body = null;

  if (loading) {
    body = <p>Loading...</p>;
  } else if (data && data.getProfile) {
    body = (
      <div>
        Hello, {data.getProfile.name}! You are logged in with{' '}
        {data.getProfile.email}
        <button
          onClick={async () => {
            await logout({
              update: (store) => {
                store.writeQuery({
                  query: GET_USERS,
                  data: null,
                });
              },
            });
            setAccessToken('');
            await client.resetStore();
          }}
        >
          Logout
        </button>
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
