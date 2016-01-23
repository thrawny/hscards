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
        {!isFetching && cards.length === 0 &&
        <Col sm={12} md={12}>
          <div>No results.</div>
        </Col>}
        {isFetching && cards.length === 0 &&
        <Col sm={12} md={12}>
          <div>Loading...</div>
        </Col>}
        {cards.length > 0 && cardList}
      </Row>
    );
  }
}

export default connect(state => state.rootReducer.searchResults)(SearchPage);
