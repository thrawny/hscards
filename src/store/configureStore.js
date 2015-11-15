import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerStateReducer, reduxReactRouter } from 'redux-router';
import { createHistory } from 'history'

/**
 * Sets up the redux store.  Responsible for loading up the reducers and middleware.
 *
 * @param routes
 */
export default function create(routes) {
  const composedReducers = combineReducers({
    router: routerStateReducer,
    rootReducer
  });
  const finalCreateStore = compose(applyMiddleware(thunkMiddleware, createLogger()),
    reduxReactRouter({
      routes,
      createHistory
    }))(createStore);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return  finalCreateStore(composedReducers);
}