/**
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import { Link } from 'react-router';
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

import SearchBar from '../components/SearchBar';

const HomePage = ({params, dispatch, children}) => (
  <Grid>
    <Row>
      <Link to="/"><PageHeader>Search for Hearthstone cards</PageHeader></Link>
      <SearchBar text={params.text} dispatch={dispatch}  />
    </Row>
    {children}
  </Grid>
);

export default connect(state => state)(HomePage);