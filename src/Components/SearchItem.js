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


const SearchItem = ({data}) => (
  <Col md={4} sm={6}>
    <Link to={"/card/"+data.name}>
      <Panel>
        <Image className="center-block" src={data.img} responsive />
      </Panel>
    </Link>
  </Col>
);

export default SearchItem;
