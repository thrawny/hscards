/**
 *
 * Created by thrawn on 17/01/16.
 */


import React, { Component } from 'react';
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
  Nav
} from 'react-bootstrap';

import { login } from '../actions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.getInputDOMNode().value;
    const password = this.refs.password.getInputDOMNode().value;
    this.props.dispatch(login(email, password, location.pathname))

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Navbar.Form pullLeft>
            <Input type="text" ref="email" placeholder="email" />{' '}
            <Input type="password" ref="password" placeholder="password" />{' '}
            <Button type="submit">Submit</Button>
        </Navbar.Form>
      </form>
    );
  }
}

Login.propTypes = {};

export default Login;


