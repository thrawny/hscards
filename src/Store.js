/**
 * Created by thrawn on 01/11/15.
 */

import request from 'superagent';
import { Dispatcher } from 'flux';
import assign from 'object-assign';
import EventEmitter from 'events';


var AppDispatcher = new Dispatcher();

const CHANGE_EVENT = 'change';
const URL = 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/';
import KEY from './secret';

var _search = [];

const AppConstants = {
  SEARCH: 'SEARCH'
};

var AppActions = {
  search: function(text) {
    request
      .get(URL+text)
      .query({collectible: 1})
      .set('X-Mashape-Key', KEY)
      .end(function(err, res) {
        console.log(res);
        if (!err) {
          AppDispatcher.dispatch({
            actionType: AppConstants.SEARCH,
            text: text,
            data: res.body
          });
        }
        else {
          console.log(err);
        }
      });
  }
};


var AppStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _search;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case AppConstants.SEARCH:
      console.log(AppConstants.SEARCH);
      _search = action.data;
      AppStore.emitChange();
      break;
    default:
      // no op
  }

});

export{ AppActions, AppStore };



