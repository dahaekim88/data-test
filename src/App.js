import React, { useState, useEffect } from 'react';
import Routes from './routes';
import { ErrorBoundary } from './components';
import { setAccessToken } from './utils/accessToken';
import { API_URL } from './.config';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/refresh_token`, {
      method: 'POST',
      credentials: 'include',
    }).then(async (x) => {
      const { accessToken } = await x.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
};

export default App;
