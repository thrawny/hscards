import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';
import requireAuthentication from './components/AuthenticatedComponent'

import HomePage from './pages/Home';
import SearchPage from './pages/Search';
import CardPage from './pages/Card';
import ProfilePage from './pages/Profile';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="card/:name" component={CardPage} />
    <Route path="search(/:text)" component={SearchPage} />
    <Route path="profile" component={requireAuthentication(ProfilePage)} />
    <IndexRedirect to="search" />
  </Route>
);

export default routes;