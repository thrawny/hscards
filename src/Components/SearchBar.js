/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';

import { fetchSearch } from '../actions';

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

import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'

const SearchBar = React.createClass({
  getInitialState() {
    return { text: '' };
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.setState({ text: '' });
      this.props.dispatch(routeActions.push('/search/'+this.state.text));
    }
  },
  render() {
    return (
      <Col xs={12} md={12}>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            bsSize="large"
            placeholder="Search..."
            value={this.state.text}
            onChange={e => {this.setState({ text: e.target.value })}}
          />
        </form>
      </Col>
    );
  }
});

export default SearchBar;
