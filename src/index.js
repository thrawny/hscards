import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore'

import routes from './routes';

const store = configureStore();

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'));
