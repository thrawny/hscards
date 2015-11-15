import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { ReduxRouter } from 'redux-router';

import routes from './routes';

const store = configureStore(routes);

import { search } from './actions';


window.search = search;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>,
  document.getElementById('root'));
