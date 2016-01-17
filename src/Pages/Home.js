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
  Panel,
  Navbar,
  NavBrand,
  NavItem,
  Nav



} from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import Login from  '../components/Login';


const HomePage = ({params, dispatch, children}) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Search for Hearthstone cards</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
          <Login />
      </Navbar.Collapse>
    </Navbar>
    <Grid>
      <Row>
          <SearchBar text={params.text} dispatch={dispatch}  />
      </Row>
      {children}
    </Grid>
  </div>
);

export default connect(state => state)(HomePage);