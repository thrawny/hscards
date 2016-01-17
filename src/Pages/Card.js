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

import CardInfo from '../components/CardInfo';

import { fetchCard } from '../actions'

class CardPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(fetchCard(this.props.params.name));
  }
  render() {
    const { card, isFetching } = this.props;

    const cardInfo = (
      <div>
        <Col sm={6} md={4}>
          <Panel>
            <Image className="center-block" src={card.img} responsive />
          </Panel>
        </Col>
        <Col sm={6} md={8}>
          <CardInfo data={card} />
        </Col>
      </div>
    );

    return (
      <Row>
        {isFetching && <div>Loading...</div>}
        {!isFetching && card.name === undefined && <div>Card not found</div>}
        {card.name !== undefined && cardInfo}
      </Row>
    )
  }
}

export default connect(state => state.rootReducer.cardResult)(CardPage);
