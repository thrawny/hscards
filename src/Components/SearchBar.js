/**
 *
 * Created by thrawn on 12/11/15.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router'
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

import { fetchSearch } from '../actions';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.setState({ text: '' });
      this.props.dispatch(routeActions.push('/search/'+this.state.text));
    }
  }
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
}

export default SearchBar;
