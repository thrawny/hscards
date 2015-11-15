import React from 'react';
import Reflux from 'reflux';
import SearchStore from '../store/SearchStore';
import SearchActions from '../store/SearchActions';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';
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

import { fetchSearch } from '../actions'

import SearchList from '../components/SearchList';

const SearchPage = React.createClass({
  componentDidMount() {
    if (this.props.params.text) {
      //SearchActions.search(this.props.params.text);
      this.props.dispatch(fetchSearch(this.props.params.text));
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.text && nextProps.params.text !== this.props.params.text) {
      this.props.dispatch(fetchSearch(nextProps.params.text));
    }
  },
  render() {
    const searchResults = false ?
      <div><Col xs={12} md={12}>Loading</Col></div> :
      <SearchList allSearchResults={this.props.cards} text={this.props.params.text} />;
    return (
      <Row>
        {this.props.isFetching ? <div><Col xs={12} md={12}>Loading</Col></div> : null}
        {searchResults}
      </Row>
    );
  }
});

function mapStateToProps(state) {
  return state.rootReducer.searchResults;
}

export default connect(mapStateToProps)(SearchPage);
