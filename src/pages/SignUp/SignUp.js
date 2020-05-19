import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { SIGNUP } from '../../apollo/mutations';
import { GET_PROFILE } from '../../apollo/queries';
import { setAccessToken } from '../../utils/accessToken';

const SignUp = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup] = useMutation(SIGNUP);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        const response = await signup({
          variables: {
            name,
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
                getProfile: data.signup.user,
              },
            });
          },
        });

        if (response && response.data) {
          setAccessToken(response.data.signup.accessToken);
        }

        history.push('/');
      }}
    >
      <div>
        <input
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
