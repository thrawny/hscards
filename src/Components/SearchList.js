/**
 *
 * Created by thrawn on 12/11/15.
 */

import React from 'react';
import _ from 'lodash';

import SearchItem from './SearchItem';

const SearchList = React.createClass({
  render() {
    console.log(this.props.allSearchResults);
    const searchItems = _.map(this.props.allSearchResults, function(item) {
      return <SearchItem key={item.cardId} data={item} />;
    });
    return (
      <div style={{ opacity: this.props.isFetching ? 0.5 : 1 }}>{searchItems}</div>
    );
  }
});

export default SearchList;