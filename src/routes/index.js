import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Test } from '../pages';
import { Navbar } from '../components';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/test',
    exact: true,
    component: Test,
  },
];

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </Switch>
  </>
);

export default Routes;
