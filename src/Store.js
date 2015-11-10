/**
 * Created by thrawn on 04/11/15.
 */

import Reflux from 'reflux';
import request from 'superagent';
import KEY from './secret';
import Actions from './Actions';

const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/';

var Store = Reflux.createStore({
  listenables: Actions,
  getInitialState() {
    this.list = [];
    return {
      loading: false,
      list: this.list
    };
  },
  onSearch(text) {
    this._loading();
    request
      .get(URL+text)
      .query({collectible: 1})
      .set('X-Mashape-Key', KEY)
      .end(function(err, res) {
        console.log(res);
        if (!err) {
          this._updateList(res.body);
        }
        else {
          console.log(err);
          this._updateList([])
        }
      }.bind(this));
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

export default Store;