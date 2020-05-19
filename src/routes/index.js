import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, SignUp, Login, Users } from '../pages';
import { Header, PrivateRoute, PublicRoute } from '../components';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
    private: false,
    restricted: false,
  },
  {
    path: '/signup',
    name: 'SignUp',
    exact: true,
    component: SignUp,
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: Login,
    private: false,
    restricted: true,
  },
  {
    path: '/users',
    name: 'Users',
    exact: true,
    component: Users,
    private: true,
  },
];

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      {routes.map((route) => {
        return route.private ? (
          <PrivateRoute
            key={route.name}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ) : (
          <PublicRoute
            key={route.name}
            path={route.path}
            exact={route.exact}
            component={route.component}
            restricted={route.restricted}
          />
        );
      })}
    </Switch>
  </Router>
);

export default Routes;
