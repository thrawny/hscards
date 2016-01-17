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
  Navbar
} from 'react-bootstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('hej');

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Navbar.Form  pullRight>
            <Input type="text" placeholder="email"
                   value={this.state.email}
                   onChange={e => {this.setState({ email: e.target.value })}}
            />{' '}
            <Input type="password" placeholder="password"
                   value={this.state.password}
                   onChange={e => {this.setState({ password: e.target.value })}}
            />{' '}
            <Button type="submit">Submit</Button>
        </Navbar.Form>
      </form>
    );
  }
}

Login.propTypes = {};

export default Login;


