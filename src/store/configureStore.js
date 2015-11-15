import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import { createHistory } from 'history';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import HomePage from '../pages/Home';
import SearchPage from '../pages/Search';
import CardPage from '../pages/Card';

const routes = (
  <Route path="/" component={HomePage}>
    <Route path="card/:name" component={CardPage} />
    <Route path="search(/:text)" component={SearchPage} />
    <IndexRedirect to="search" />
  </Route>
);

//const createStoreWithMiddleware = compose(
//  applyMiddleware(thunkMiddleware, createLogger()),
//  ReduxRouter({createHistory})
//)(createStore);

export default function configureStore(initialState) {
  const reducer = combineReducers({
    rootReducer,
    router: routerStateReducer
  });
  const store = compose(
    applyMiddleware(thunkMiddleware, createLogger),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(reducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}

