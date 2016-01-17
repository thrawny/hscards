/**
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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

import SearchBar from '../components/SearchBar';

const HomePage = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Link to="/"><PageHeader>Search for Hearthstone cards</PageHeader></Link>
          <SearchBar text={this.props.params.text} dispatch={this.props.dispatch}  />
        </Row>
        {this.props.children}
      </Grid>
    );
  }
});

export default connect(state => state)(HomePage);