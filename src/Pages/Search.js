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
    console.log('mount');
    console.log(this.props);
    if (this.props.params.text) {
      //SearchActions.search(this.props.params.text);
      //dispatch(fetchSearch(this.props.params.text));
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.text && nextProps.params.text !== this.props.params.text) {
      //dispatch(fetchSearch(this.props.params.text));
    }
  },
  render() {
    let searchResults = false ?
      <Col xs={12} md={12}><div>Loading</div></Col> :
      <SearchList allSearchResults={[]} text={this.props.params.text} />;
    return (
      <Row>
        {searchResults}
      </Row>
    );
  }
});

function mapStateToProps(state) {
  console.log('state', state);
  return state;
}

export default connect(mapStateToProps)(SearchPage);
