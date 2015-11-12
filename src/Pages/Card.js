import React from 'react';
import Reflux from 'reflux';
import SearchStore from '../Stores/SearchStore';
import SearchActions from '../Stores/SearchActions';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';

const CardPage = React.createClass({
  render() {
    return (
      <div>on a card pageee</div>
    )
  }
});

export default CardPage;