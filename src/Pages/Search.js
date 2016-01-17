import React, { Component } from 'react';
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

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.params.text) {
      this.props.dispatch(fetchSearch(this.props.params.text));
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.params.text !== nextProps.params.text) {
      this.props.dispatch(fetchSearch(nextProps.params.text));
    }
  }
  render() {
    const { isFetching, cards } = this.props;
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
}

export default connect(state => state.rootReducer.searchResults)(SearchPage);
