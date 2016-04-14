import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from '../reducers'
import { browserHistory } from 'react-router';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';


export default function create() {
  const composedReducers = combineReducers({
    routing: routerReducer,
    ...reducers
  });
  const finalCreateStore = applyMiddleware(
    thunkMiddleware, createLogger(), routerMiddleware(browserHistory)
  )(createStore);

  return finalCreateStore(composedReducers);
}