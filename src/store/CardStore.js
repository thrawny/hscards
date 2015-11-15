/**
 *
 * Created by thrawn on 12/11/15.
 */


import Reflux from 'reflux';
import request from 'superagent';
import KEY from './../secret';
import CardActions from './CardActions';

import _ from 'lodash';


const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/';

const _cache = {};

const CardStore = Reflux.createStore({
  listenables: CardActions,
  getInitialState() {
    this.data = {};
    return {
      loading: false,
      data: this.data
    };
  },
  onLoad(name) {
    this._loading();
    if (_.has(_cache, name)) {
      console.log('cached card');
      this._update(_cache[name]);
    }
    else {
      console.log('card');
      request
        .get(URL+name)
        .query({collectible: 1})
        .set('X-Mashape-Key', KEY)
        .end(function(err, res) {
          if (!err) {
            const card = res.body[0];
            _cache[card.name] = card;
            this._update(card);
          }
          else {
            console.log(err);
            this._update({})
          }
        }.bind(this));
    }
  },
  addCardsToCache(cards) {
    cards.forEach(function(card) {
      _cache[card.name] = card;
    });
  },
  _update(data) {
    this.data = data;
    this.trigger({
      data: this.data,
      loading: false
    });
  },
  _loading() {
    this.trigger({ loading: true })
  }
});


export default CardStore;