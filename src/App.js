import React from 'react';

import Reflux from 'reflux';
import SearchStore from './Stores/SearchStore';
import SearchActions from './Stores/SearchActions';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';

import HomePage from './Pages/Home';
import SearchPage from './Pages/Search';
import CardPage from './Pages/Card';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="card" component={CardPage} />
    <Route path="search(/:text)" component={SearchPage} />
    <IndexRedirect to="search" />
  </Route>
);

export default routes;