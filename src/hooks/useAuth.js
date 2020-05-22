import { useMutation } from '@apollo/react-hooks';
import { LOGOUT } from '../apollo/mutations';
import { GET_USERS } from '../apollo/queries';
import { getAccessToken, setAccessToken } from '../utils/accessToken';

const useAuth = () => {
  const [logout, { client }] = useMutation(LOGOUT);

  const logoutUser = async () => {
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
  };

  const isLoggedIn = () => {
    const token = getAccessToken();
    return !!token;
  };

  return {
    logoutUser,
    isLoggedIn,
  };
};

export default useAuth;
