/**
 * Created by thrawn on 04/11/15.
 */

var Reflux = require('reflux');
var request = require('superagent');

var AppActions = Reflux.createActions(['search']);

const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/';
import KEY from './secret';

var AppStore = Reflux.createStore({
  listenables: AppActions,
  getInitialState() {
    this.list = [];
    return this.list;
  },
  onSearch(text) {
    request
      .get(URL+text)
      .query({collectible: 1})
      .set('X-Mashape-Key', KEY)
      .end(function(err, res) {
        console.log(res);
        if (!err) {
          this.updateList(res.body)
        }
        else {
          console.log(err);
        }
      }.bind(this));
  },
  updateList(list) {
    this.list = list;
    this.trigger(this.list);
  }
});

export { AppActions, AppStore };