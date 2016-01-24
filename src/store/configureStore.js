import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';


export default function create() {
  const composedReducers = combineReducers({
    router: routeReducer,
    ...reducers
  });
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const finalCreateStore = applyMiddleware(
    thunkMiddleware, createLogger(), reduxRouterMiddleware
  )(createStore);

  //if (module.hot) {
  //  // Enable Webpack hot module replacement for reducers
  //  module.hot.accept('../reducers', () => {
  //    const nextRootReducer = require('../reducers');
  //    store.replaceReducer(nextRootReducer);
  //  })
  //}

  return finalCreateStore(composedReducers);
}