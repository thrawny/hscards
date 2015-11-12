import React from 'react';
import Reflux from 'reflux';
import CardStore from '../Stores/CardStore';
import CardActions from '../Stores/CardActions';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';

import { objectEntries } from '../utils';

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

const CardPage = React.createClass({
  mixins: [Reflux.connect(CardStore)],
  componentDidMount() {
    CardActions.load(this.props.params.name);
  },
  render() {
    let dataList = [];
    for (let [key,value] of objectEntries(this.state.data)) {
      console.log(`${key}: ${value}`);
      dataList.push(<div key={key}>{key}: {value.toString()}</div>)
    }

    return (
      <Row>
        <Col xs={12} md={12}>
          {dataList}
        </Col>
      </Row>
    )
  }
});

export default CardPage;