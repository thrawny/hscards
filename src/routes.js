import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import CardPage from './pages/Card';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="card/:name" component={CardPage} />
    <Route path="search(/:text)" component={SearchPage} />
    <IndexRedirect to="search" />
  </Route>
);

export default routes;