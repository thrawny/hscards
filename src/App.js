import React, { Component } from 'react';

import {AppActions, AppStore} from './Store';

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

function getSearchState() {
  return {
    allSearchResults: AppStore.getAll()
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = getSearchState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    AppStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange);
  }
  render() {
    return (
      <Grid>
        <SearchBar />
        <SearchList allSearchResults={this.state.allSearchResults} />
      </Grid>
    );
  }
  _onChange() {
    console.log(getSearchState());
    this.setState(getSearchState());
  }
}


class SearchList extends Component {
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
}

class SearchItem extends Component {
  render() {
    let data = this.props.data;
    return (
      <Col xs={12} md={4} sm={6}>
        <Image src={data.img} />
      </Col>
    )
  }

}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    }
  }

  handleClick(e) {
    e.preventDefault();
    AppActions.search(this.state.text);
    this.setState({
      text: ''
    });
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <form onSubmit={this.handleClick}>
            <Button type="submit"
                    bsStyle="primary"
                    bsSize="large"
              >
              Search
            </Button>
            <Input ref="search" type="text" bsSize="large" placeholder="Search..." value={this.state.text} onChange={this.handleChange} />
          </form>
        </Col>
      </Row>
    )
  }
}