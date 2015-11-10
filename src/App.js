import React from 'react';

import Reflux from 'reflux';
import SearchStore from './Stores/SearchStore';
import SearchActions from './Stores/SearchActions';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute, IndexRedirect, History, Lifecycle } from 'react-router';

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

const history = useBasename(createHistory)({
  basename: '/transitions'
})


const App = React.createClass({
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

const CardPage = React.createClass({
  render() {
    return (
      <div>on a card pageee</div>
    )
  }
});

const SearchPage = React.createClass({
  mixins: [Reflux.connect(SearchStore)],
  componentDidMount() {
    console.log('mount');
    if (this.props.params.text) {
      SearchActions.search(this.props.params.text);
    }
  },
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.text && nextProps.params.text !== this.props.params.text) {
      SearchActions.search(nextProps.params.text);
    }
  },
  render() {
    let searchResults = this.state.loading ?
      <div>Loading</div> : <SearchList allSearchResults={this.state.list} text={this.props.params.text} />;
    return (
      <Row>
        {searchResults}
      </Row>
    );
  }
});

const SearchList = React.createClass({
  render() {
    let allSearchResults = this.props.allSearchResults;
    let searchItems = [];
    for (var item of allSearchResults) {
      searchItems.push(<SearchItem key={item.cardId} data={item} />);
    }
    return (
      <div>
        {searchItems}
      </div>
    )
  }
});

const SearchItem = React.createClass({
  render() {
    let data = this.props.data;
    return (
      <Col xs={12} md={4} sm={6}>
        <Panel>
          <Link to="card"><Image src={data.img} /></Link>
        </Panel>
      </Col>
    )
  }
});


const SearchBar = React.createClass({
  mixins: [History],
  getInitialState() {
    return {
      text: ''
    }
  },
  handleClick(e) {
    e.preventDefault();
    //SearchActions.search(this.state.text);
    this.setState({
      text: ''
    });
    this.history.pushState(null, 'search/'+this.state.text);
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  },

  render() {
    return (
        <Col xs={12} md={12}>
          <form onSubmit={this.handleClick}>
            <Input ref="search" type="text" bsSize="large" placeholder="Search..." value={this.state.text} onChange={this.handleChange} />
          </form>
        </Col>
    );
  }
});

const AppRouter = React.createClass({
  render() {
    return(
      <Router>
        <Route path="/" component={App}>
          <Route path="card" component={CardPage} />
          <Route path="search(/:text)" component={SearchPage} />
          <IndexRedirect to="search"/>
        </Route>
      </Router>
    );
  }
});

export default AppRouter;