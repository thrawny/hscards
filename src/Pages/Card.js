import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import CardStore from '../Stores/CardStore';
import CardActions from '../Stores/CardActions';

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

import CardInfo from '../Components/CardInfo';


const CardPage = React.createClass({
  mixins: [Reflux.connect(CardStore)],
  componentDidMount() {
    CardActions.load(this.props.params.name);
  },
  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }


    return (
      <Row>
        <Col sm={6} md={4}>
          <Panel>
            <Image src={this.state.data.img} responsive />
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