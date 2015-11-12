/**
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

import SearchBar from '../Components/SearchBar';

const HomePage = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Link to="/"><PageHeader>Search for Hearthstone cards</PageHeader></Link>
          <SearchBar />
        </Row>
        {this.props.children}
      </Grid>
    );
  }
});

export default HomePage;