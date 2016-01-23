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
  NavItem,
  Nav
} from 'react-bootstrap';

import SearchBar from '../components/SearchBar';
import Login from  '../components/Login';

import { logout } from '../actions';


const HomePage = ({params, dispatch, location, children, isAuthenticated, email, statusText}) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Search for Hearthstone cards</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {isAuthenticated &&
        <Nav pushRight>
          <Navbar.Text>Logged in as <Link to="#">{email}</Link></Navbar.Text>
          <Navbar.Text><Link to="/profile">Profile</Link></Navbar.Text>
          <NavItem onClick={() => dispatch(logout())}>Logout</NavItem>
        </Nav>}
        {!isAuthenticated &&
        <Login dispatch={dispatch}
               location={location}
               isAuthenticated={isAuthenticated}
               email={email}
               statusText={statusText}
        />}
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

export default connect(state => state.auth)(HomePage);