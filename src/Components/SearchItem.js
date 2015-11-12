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

const SearchItem = React.createClass({
  render() {
    let data = this.props.data;
    return (
      <Col xs={12} md={4} sm={6}>
        <Panel>
          <Link to="card"><Image src={data.img} /></Link>
        </Panel>
      </Col>
    )
  }
});

export default SearchItem;
