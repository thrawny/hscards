import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import CardStore from '../store/CardStore';
import CardActions from '../store/CardActions';

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

import { search, selectCard } from '../actions'

const CardPage = React.createClass({
  componentDidMount() {
    dispatch(selectCard(this.props.params.name));
  },
  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }


    return (
      <Row>
        <Col sm={6} md={4}>
          <Panel>
            <Image className="center-block" src={this.state.data.img} responsive />
          </Panel>
        </Col>
        <Col sm={6} md={8}>
          <CardInfo data={this.state.data} />
        </Col>
      </Row>
    )
  }
});

export default CardPage;