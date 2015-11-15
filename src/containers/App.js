/**
 *
 * Created by thrawn on 15/11/15.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { search, selectCard, fetchSearch } from '../actions'

import { Router, Route, IndexRedirect } from 'react-router';
import { ReduxRouter } from 'redux-router';

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

const App = React.createClass({
  componentDidMount() {
    //console.log(this.props);
    this.props.dispatch(search('ice'));
  },
  render() {
    return (
      <ReduxRouter />
    )
  }
});

function mapStateToProps(state) {
  //console.log(state);
  return state;
}
export default connect(mapStateToProps)(App);
