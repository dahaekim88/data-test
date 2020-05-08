import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../apollo/queries';

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS, {
    fetchPolicy: 'network-only',
  });
  const username = localStorage.getItem('name');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
    return <div>Not logged in..</div>;
  }

  return (
    <>
      {username && <div>Hello, {username}</div>}
      <ul>
        {data.getUsers.map((user) => (
          <li key={user.name}>
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
