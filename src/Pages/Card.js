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


const CardPage = React.createClass({
  mixins: [Reflux.connect(CardStore)],
  componentDidMount() {
    CardActions.load(this.props.params.name);
  },
  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }

    const dataList = _.chain(this.state.data)
      .omit('img', 'imgGold', 'cardId', 'locale')
      .pairs()
      .map(function([key, value]){
        const htmlValue = {__html: value.toString()};
        return <div key={key}>{key}: <span dangerouslySetInnerHTML={htmlValue} /></div>;
      })
      .value();

    return (
      <Row>
        <Col xs={6} md={6}>
          <Panel>
            <Image src={this.state.data.img} />
          </Panel>
        </Col>
        <Col xs={6} md={6}>
          <Panel>
            {dataList}
          </Panel>
        </Col>
      </Row>
    )
  }
});

export default CardPage;