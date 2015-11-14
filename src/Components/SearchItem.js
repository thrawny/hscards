/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import { Link } from 'react-router';

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


const SearchItem = React.createClass({
  render() {
    const data = this.props.data;
    return (
      <Col md={4} sm={6}>
        <Panel>
          <Link to={"card/"+data.name}><Image src={data.img} responsive /></Link>
        </Panel>
      </Col>
    )
  }
});

export default SearchItem;