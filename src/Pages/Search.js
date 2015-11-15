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

import SearchItem from '../components/SearchItem';

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
    const {isFetching, cards } = this.props;
    const cardList = (
      <div>
        {cards.map(function(item){
          return <SearchItem key={item.cardId} data={item} />;
        })}
      </div>
    );
    return (
      <Row>
        {!isFetching && cards.length === 0 && <div>No results</div>}
        {isFetching && cards.length === 0 && <div>Loading...</div>}
        {cards.length > 0 && cardList}
      </Row>
    );
  }
});

function mapStateToProps(state) {
  return state.rootReducer.searchResults;
}

export default connect(mapStateToProps)(SearchPage);
