import React from 'react';
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
  render() {
    const {isFetching, cards } = this.props;
    const cardList = (
      <div>
        {cards.map(function(card){
          return <SearchItem key={card.cardId} data={card} />;
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
