import React from 'react';

import Reflux from 'reflux';
import Store from './Store';
import Actions from './Actions';

import {
  Button,
  ListGroup,
  ListGroupItem,
  Image,
  Input,
  Grid,
  Row,
  Col
} from 'react-bootstrap';


var App = React.createClass({
  mixins: [Reflux.connect(Store, 'list')],
  render() {
    return (
      <Grid>
        <SearchBar />
        <SearchList allSearchResults={this.state.list} />
      </Grid>
    );
  }
});

var SearchList = React.createClass({
  render() {
    let allSearchResults = this.props.allSearchResults;
    let searchItems = [];
    for (var item of allSearchResults) {
      searchItems.push(<SearchItem key={item.cardId} data={item}></SearchItem>);
    }
    return (
      <Row>
        {searchItems}
      </Row>
    )
  }
});

var SearchItem = React.createClass({
  render() {
    let data = this.props.data;
    return (
      <Col xs={12} md={4} sm={6}>
        <Image src={data.img} />
      </Col>
    )
  }
});


var SearchBar = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  handleClick(e) {
    e.preventDefault();
    Actions.search(this.state.text);
    this.setState({
      text: ''
    });
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  },

  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <form onSubmit={this.handleClick}>
            <Input ref="search" type="text" bsSize="large" placeholder="Search..." value={this.state.text} onChange={this.handleChange} />
          </form>
        </Col>
      </Row>
    )
  }
});

export default App;