import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from '../../apollo/mutations';
import { GET_PROFILE } from '../../apollo/queries';
import { setAccessToken } from '../../utils/accessToken';

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(LOGIN);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const response = await login({
          variables: {
            email,
            password,
          },
          update: (store, { data }) => {
            if (!data) {
              return null;
            }
            store.writeQuery({
              query: GET_PROFILE,
              data: {
                getProfile: data.login.user,
              },
            });
          },
        });

        if (response && response.data) {
          setAccessToken(response.data.login.accessToken);
        }

        history.push('/');
      }}
    >
      <div>
        <input
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
