/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import { History } from 'react-router';

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


const SearchBar = React.createClass({
  mixins: [History],
  getInitialState() {
    return {
      text: ''
    }
  },
  handleClick(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.setState({
        text: ''
      });
      this.history.pushState(null, 'search/'+this.state.text);
    }
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  },

  render() {
    return (
      <Col xs={12} md={12}>
        <form onSubmit={this.handleClick}>
          <Input
            ref="search"
            type="text"
            bsSize="large"
            placeholder="Search..."
            value={this.state.text}
            onChange={this.handleChange}
          />
        </form>
      </Col>
    );
  }
});

export default SearchBar;