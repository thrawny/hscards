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

import SearchList from '../Components/SearchList';

const SearchPage = React.createClass({
  mixins: [Reflux.connect(SearchStore)],
  componentDidMount() {
    console.log('mount');
    if (this.props.params.text) {
      SearchActions.search(this.props.params.text);
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.text && nextProps.params.text !== this.props.params.text) {
      SearchActions.search(nextProps.params.text);
    }
  },
  render() {
    let searchResults = this.state.loading ?
      <div>Loading</div> : <SearchList allSearchResults={this.state.list} text={this.props.params.text} />;
    return (
      <Row>
        {searchResults}
      </Row>
    );
  }
});

export default SearchPage;
