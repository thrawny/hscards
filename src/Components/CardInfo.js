/**
 * Created by thrawn on 14/11/15.
 */

import React from 'react';

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
  Panel,
} from 'react-bootstrap';

const CardInfo = React.createClass({

  render() {
    const dataList = _.chain(this.props.data)
      .omit('img', 'imgGold', 'cardId', 'locale')
      .pairs()
      .map(function([key, value]){
        const htmlValue = {__html: value.toString()};
        return (
          <ListGroupItem key={key} header={key}>
            <span dangerouslySetInnerHTML={htmlValue} />
          </ListGroupItem>
        );
      })
      .value();

    return (
      <ListGroup>
        {dataList}
      </ListGroup>
    )
  }

});

export default CardInfo;
