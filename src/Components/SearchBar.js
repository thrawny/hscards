/**
 *
 * Created by thrawn on 12/11/15.
 */

import React, { Component } from 'react';
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
  Panel,
  Well
} from 'react-bootstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    if (text !== '') {
      this.setState({ text: '' });
      this.props.dispatch(routeActions.push(`/search/${text}`));
    }
  }
  render() {
    return (
      <Col xs={12} md={12}>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            bsSize="large"
            placeholder="Type in your search here, i.e. knight, fire or Ysera"
            value={this.state.text}
            onChange={e => {this.setState({ text: e.target.value })}}
          />
        </form>
      </Col>
    );
  }
}

export default SearchBar;
