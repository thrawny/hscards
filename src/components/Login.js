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
  Nav,
  Fade
} from 'react-bootstrap';

import { login } from '../actions';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {this.setState({ showAlert: false })}, 5000);
    this.setState({ showAlert: true });
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
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
            <Button type="submit">Login</Button>
        </Navbar.Form>
        <Fade in={this.state.showAlert}>
          <Navbar.Text>
            {this.props.statusText}
          </Navbar.Text>
        </Fade>
      </form>
    );
  }
}

Login.propTypes = {};

export default Login;


