import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import HomePage from './Pages/Home';
import SearchPage from './Pages/Search';
import CardPage from './Pages/Card';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="card/:name" component={CardPage} />
    <Route path="search(/:text)" component={SearchPage} />
    <IndexRedirect to="search" />
  </Route>
);

export default routes;