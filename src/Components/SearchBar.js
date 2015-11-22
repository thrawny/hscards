/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import { History } from 'react-router';

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

const SearchBar = React.createClass({
  mixins: [History],
  getInitialState() {
    return { text: '' };
  },
  componentDidMount() {
    const { dispatch, router } = this.props;
    if (router.params.text) {
      dispatch(fetchSearch(router.params.text));
    }
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.dispatch(fetchSearch(this.state.text));
      this.setState({ text: '' });
      this.history.pushState(null, '/search/'+this.state.text);
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

export default connect(state => state)(SearchBar);
