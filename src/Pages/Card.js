import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

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

const CardPage = React.createClass({
  componentDidMount() {
    this.props.dispatch(fetchCard(this.props.params.name));
  },
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
        {!isFetching && card.name == undefined && <div>Card not found</div>}
        {card.name != undefined && cardInfo}
      </Row>
    )
  }
});

function mapStateToProps(state) {
  return state.rootReducer.cardResult;
}

export default connect(mapStateToProps)(CardPage);
