/**
 * Created by thrawn on 04/11/15.
 */

import Reflux from 'reflux';
import request from 'superagent';
import _ from 'lodash';
import KEY from './../secret';


import SearchActions from './SearchActions';
import CardStore from './CardStore';

const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/';

const _cache = {};

var SearchStore = Reflux.createStore({
  listenables: SearchActions,
  getInitialState() {
    this.list = [];
    return {
      loading: false,
      list: this.list
    };
  },
  onSearch(text) {
    this._loading();
    if (_.has(_cache, text)) {
      console.log('cached search');
      this._updateList(_cache[text]);
    }
    else {
      console.log('search');
      request
        .get(URL+text)
        .query({collectible: 1})
        .set('X-Mashape-Key', KEY)
        .end(function(err, res) {
          if (!err) {
            const cards = res.body;
            console.log(cards);
            _cache[text] = cards;
            CardStore.addCardsToCache(cards);
            this._updateList(cards);
          }
          else {
            console.log(err);
            this._updateList([])
          }
        }.bind(this));
    }
  },
  _loading() {
    this.trigger({ loading: true })
  },
  _updateList(list) {
    this.list = list;
    this.trigger({
      loading: false,
      list: this.list
    });
  }
});

export default SearchStore;