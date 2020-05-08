import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SignUp, Login } from '../pages';
import { Navbar } from '../components';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    exact: true,
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login,
  },
];

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  </Router>
);

export default Routes;
