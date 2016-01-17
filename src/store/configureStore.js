import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';


export default function create(history) {
  const composedReducers = combineReducers({
    router: routeReducer,
    rootReducer
  });
  const reduxRouterMiddleware = syncHistory(history);
  const finalCreateStore = applyMiddleware(
    thunkMiddleware, createLogger(), reduxRouterMiddleware
  )(createStore);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return finalCreateStore(composedReducers);
}