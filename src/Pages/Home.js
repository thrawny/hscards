/**
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

import SearchBar from '../components/SearchBar';

const HomePage = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Link to="/"><PageHeader>Search for Hearthstone cards</PageHeader></Link>
          <SearchBar />
        </Row>
        {this.props.children}
      </Grid>
    );
  }
});

export default HomePage;