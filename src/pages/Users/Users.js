import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_USERS } from '../../apollo/queries';

const Users = () => {
  const { loading, data } = useQuery(GET_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>Users List</div>
      <ul>
        {data.getUsers &&
          data.getUsers.map((user) => (
            <li key={user.name}>
              {user.name}: {user.email}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
