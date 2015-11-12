/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import Reflux from 'reflux';
import SearchStore from '../Stores/SearchStore';
import SearchActions from '../Stores/SearchActions';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';

import {
  Button,
  ListGroup,
  ListGroupItem,
  Image,
  Input,
  Grid,
  Row,
  Col,
  PageHeader,
  Panel
} from 'react-bootstrap';

import SearchItem from './SearchItem';

const SearchList = React.createClass({
  render() {
    let allSearchResults = this.props.allSearchResults;
    let searchItems = [];
    for (var item of allSearchResults) {
      searchItems.push(<SearchItem key={item.cardId} data={item} />);
    }
    return (
      <div>
        {searchItems}
      </div>
    )
  }
});

export default SearchList;