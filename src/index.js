import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore'
import { receiveLoginSuccess } from './actions'
import jwtDecode from 'jwt-decode';

import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

window.store = store;

const token = localStorage.getItem('token');
if (token !== null) {
  console.log(jwtDecode(token));
  store.dispatch(receiveLoginSuccess(token));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root'));
