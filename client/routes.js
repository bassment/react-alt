import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Welcome from './components/Home/Welcome';
import Count from './components/Count/Count';

const routes = (
  <Route component={App}>
    <Route path="/" component={Welcome} />
    <Route path="/count" component={Count} />
  </Route>
);

export default routes;
