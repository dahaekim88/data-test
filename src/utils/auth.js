import { getAccessToken } from './accessToken';

export const isLoggedIn = () => {
  const token = getAccessToken();
  return !!token;
};
